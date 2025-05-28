import * as THREE from 'three';
import sCommon from './shaders/sCommon.glsl?raw';
import vsStar from './shaders/vsStar.glsl?raw';
import fsStar from './shaders/fsStar.glsl?raw';
import { trueMotionSphericalToCartesian } from '../../astro/math/mathTools';
import { SphereLocation } from './sphereLocation';
import { ChartScene } from './chartScene';

class StarsGroup {
    static TEXTURE_MAX_WIDTH = 1024;
    static FLOATS_PER_STAR = 8;

    chartScene: ChartScene;

    dataTexture: THREE.Texture;
    ibGeometry: THREE.InstancedBufferGeometry;

    shader: THREE.ShaderMaterial;

    mesh: THREE.Points;

    constructor(chartScene: ChartScene, astro: any) {
        this.chartScene = chartScene;

        const stars = [];
        const data = [];
        for (const star of astro.stars.data) {
            const obj: Record<string, any> = { };
            for (const [k, [field, _]] of astro.stars.descr.entries())
                obj[field] = star[k];
            stars.push(obj);
            // Units for r, rv is parsec, parsec/jcy
            const r = obj.Plx !== null ? 1 / obj.Plx : 100_000;
            const rv = obj.RV !== null ? obj.RV : 0;
            const [p, pv] = trueMotionSphericalToCartesian([obj.RA, obj.DE], [obj.pmRA, obj.pmDE], r, rv);
            const vMag = obj.Vmag;
            const bmv = obj.Bmag - obj.Vmag;
            data.push(...[...p, ...pv, vMag, bmv]);
        }
        console.log(data);
        const n = stars.length;
        const m = n * StarsGroup.FLOATS_PER_STAR / 4;

        const [w, h] = [
            Math.min(m, StarsGroup.TEXTURE_MAX_WIDTH), 
            Math.ceil(m / StarsGroup.TEXTURE_MAX_WIDTH)
        ];
        const float32Data = new Float32Array(4*w*h);
        float32Data.set(data, 0);
        this.dataTexture = new THREE.DataTexture(
            float32Data, w, h,
            THREE.RGBAFormat, THREE.FloatType,
        );
        this.dataTexture.needsUpdate = true;

        // console.log('n', n);
        // console.log('m', m);
        // console.log('dim_x', Math.min(m, StarsGroup.TEXTURE_MAX_WIDTH));
        // console.log('dim_y', Math.ceil(m / StarsGroup.TEXTURE_MAX_WIDTH));
        // console.log('dim_x*dim_y', Math.min(m, StarsGroup.TEXTURE_MAX_WIDTH)*Math.ceil(m / StarsGroup.TEXTURE_MAX_WIDTH));

        this.shader = new THREE.ShaderMaterial({
            defines: this.chartScene.loc.projectionDefines,
            uniforms: {
                mollweideTexture: { value: this.chartScene.mollweide.texture },
                focalLength: { value: null },
                starDataTexture: { value: this.dataTexture },
                rotation: { value: null },
            },
            vertexShader: sCommon + '\n' + vsStar,
            fragmentShader: sCommon + '\n' + fsStar,
            transparent: true,
        });

        this.ibGeometry = new THREE.InstancedBufferGeometry();
        // dummy position, not used
        this.ibGeometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
        this.ibGeometry.instanceCount = n;
        
        this.mesh = new THREE.Points(this.ibGeometry, this.shader);
        this.mesh.frustumCulled = false;
    }

    dispose() {
        this.ibGeometry.dispose();
        this.dataTexture.dispose();
        this.shader.dispose();
    }
}


export { StarsGroup };