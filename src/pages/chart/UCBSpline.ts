import * as THREE from 'three';
import sCommon from './shaders/sCommon.glsl?raw';
import vsSpline from './shaders/vsSpline.glsl?raw';
import fsSpline from './shaders/fsSpline.glsl?raw';
import { ChartScene } from './chartScene';

/**
 * Draws uniform cubic B-splines using instancing.
 */
class UCBSplineGroup {
    /**
     * MAX_WIDTH has to match corresponding value in shader code.
     * This is used to avoid limitations on texture dimensions.
     */
    static MAX_WIDTH = 1024;
    /**
     * Matrix to compute B-spline control points that yield given curve points at t=0,1/3,2/3,1.
     */
    static INTERPOLATION_MATRIX: number[][] = [
        [12.5, -24, 16.5, -4],
        [-2, 7.5, -6, 1.5],
        [1.5, -6, 7.5, -2],
        [-4, 16.5, -24, 12.5]
    ];

    chartScene: ChartScene;

    shader: THREE.ShaderMaterial;
    numSegments: number;

    ibGeometry!: THREE.InstancedBufferGeometry;
    controlPointTexture!: THREE.DataTexture;    // positions and colors for each control point
    indexTexture!: THREE.DataTexture;
    mesh: THREE.Line;

    // (x,y,z,0,red,green,blue,0) for each control point, flattened
    controlPointArray: Float32Array;
    // index i for plotting Bezier for control points (i,i+1,i+2,i+3)
    indexArray: Int32Array;

    numControlPoints: number = 0;
    numIndexes: number = 0;

    constructor(chartScene: ChartScene, numSegments: number=16) {
        this.chartScene = chartScene;
        
        this.numSegments = numSegments;

        this.shader = new THREE.ShaderMaterial({
            defines: this.chartScene.loc.projectionDefines,
            uniforms: {
                numSegments: { value: this.numSegments },
                mollweideTexture: { value: this.chartScene.mollweide.texture },
                controlPointTexture: { value: null },
                indexTexture: { value: null },
                focalLength: { value: null },
                rotation: { value: null },
            },
            vertexShader: sCommon + '\n' + vsSpline,
            fragmentShader: sCommon + '\n' + fsSpline,
        });

        this.ibGeometry = new THREE.InstancedBufferGeometry();
        this.ibGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));

        this.controlPointArray = new Float32Array(0);
        this.indexArray = new Int32Array(0);

        this.controlPointTexture = new THREE.DataTexture(this.controlPointArray, this.controlPointArray.length/4, 1, THREE.RGBAFormat, THREE.FloatType);
        this.indexTexture = new THREE.DataTexture(this.indexArray, this.indexArray.length, 1, THREE.RedIntegerFormat, THREE.IntType);
        this.shader.uniforms.controlPointTexture.value = this.controlPointTexture;
        this.shader.uniforms.indexTexture.value = this.indexTexture;

        this.mesh = new THREE.Line(this.ibGeometry, this.shader);
        this.mesh.frustumCulled = false;

        this.reset();
    }

    addSpline(controlPoints: THREE.Vector3[], color: (k: number) => number[], isClosed: boolean=false) {
        if (controlPoints.length < 4)
            throw new Error('Too few points to create spline, at least 4 are needed.');

        // Number of control points after adding
        const np = this.numControlPoints + controlPoints.length + (isClosed ? 3 : 0);
        // Number of indexes after adding
        const ni = this.numIndexes + controlPoints.length + (isClosed ? 0 : -3);

        if (8*np > this.controlPointArray.length)
            this.extendControlPointArray(8*np);
        if (ni > this.indexArray.length)
            this.extendIndexArray(ni);

        for (let k = 0; k < controlPoints.length + (isClosed ? 3 : 0); k++) {
            const j = k % controlPoints.length;
            const p = controlPoints[j];
            const c = color(j);
            const m = 8 * this.numControlPoints;
            this.controlPointArray[m + 0] = p.x;
            this.controlPointArray[m + 1] = p.y;
            this.controlPointArray[m + 2] = p.z;
            // this.controlPointArray[m + 3] = 0;
            this.controlPointArray[m + 4] = c[0];
            this.controlPointArray[m + 5] = c[1];
            this.controlPointArray[m + 6] = c[2];
            // this.controlPointArray[m + 7] = 0;
            if (k < controlPoints.length + (isClosed ? 0 : -3)) {
                this.indexArray[this.numIndexes] = this.numControlPoints;
                this.numIndexes += 1;
            }
            this.numControlPoints += 1;
        }

        this.ibGeometry.instanceCount = this.numIndexes * this.numSegments;
        this.controlPointTexture.needsUpdate = true;
        this.indexTexture.needsUpdate = true;
    }

    /**
     * Adds a 4 control point spline with control points selected so that the spline
     * satisfies C(0)=points[0], C(1/3)=points[1], C(2/3)=points[2], and C(1)=points[3].
     */
    addInterpolatingSpline(points: THREE.Vector3[], color: (k: number) => number[]) {
        if (points.length !== 4)
            throw new Error('Invalid arguments');
        const controlPoints = [];
        for (let k = 0; k < 4; k++) {
            let pSum = new THREE.Vector3(0, 0, 0);
            for (let j = 0; j < 4; j++)
                pSum.addScaledVector(points[j], UCBSplineGroup.INTERPOLATION_MATRIX[k][j]);
            controlPoints.push(pSum);
        }
        this.addSpline(controlPoints, color, false);
    }

    private extendControlPointArray(minLength: number) {
        // n is smallest power of 2 that is at least minLength
        const n = Math.pow(2, Math.ceil(Math.log2(minLength)));
        // Create large enough array to hold all data
        const newArray = new Float32Array(n);

        // Copy existing data from previous array
        newArray.set(this.controlPointArray, 0);
        this.controlPointArray = newArray;

        // Hook new array into this.controlPointTexture
        this.controlPointTexture.dispose();
        const m = this.controlPointArray.length / 4;
        this.controlPointTexture = new THREE.DataTexture(
            this.controlPointArray, 
            Math.min(m, UCBSplineGroup.MAX_WIDTH), 
            Math.ceil(m / UCBSplineGroup.MAX_WIDTH),
            THREE.RGBAFormat, THREE.FloatType
        );
        this.shader.uniforms.controlPointTexture.value = this.controlPointTexture;
    }

    private extendIndexArray(minLength: number) {
        // n is smallest power of 2 that is at least minLength
        const n = Math.pow(2, Math.ceil(Math.log2(minLength)));
        // Create large enough array to hold all data
        const newArray = new Int32Array(n);

        // Copy existing data from previous array
        newArray.set(this.indexArray, 0);
        this.indexArray = newArray;

        // Hook new array into this.indexTexture
        this.indexTexture.dispose();
        this.indexTexture = new THREE.DataTexture(
            this.indexArray, 
            Math.min(this.indexArray.length, UCBSplineGroup.MAX_WIDTH), 
            Math.ceil(this.indexArray.length / UCBSplineGroup.MAX_WIDTH), 
            THREE.RedIntegerFormat, THREE.IntType
        );
        this.shader.uniforms.indexTexture.value = this.indexTexture;
    }

    reset() {
        this.numControlPoints = 0;
        this.numIndexes = 0;
        this.ibGeometry.instanceCount = 0;
    }

    getObject(): THREE.Line {
        return this.mesh;
    }

    dispose() {
        this.shader.dispose();
        this.controlPointTexture.dispose();
        this.indexTexture.dispose();
        this.ibGeometry.dispose();
    }
}

export { UCBSplineGroup };