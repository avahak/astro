import * as THREE from 'three';
import vsStar from './shaders/vsStar.glsl?raw';
import fsStar from './shaders/fsStar.glsl?raw';
import { trueMotionSphericalToCartesian } from '../../astro/math/mathTools';
import { Vec } from '../../astro/math/vec';

class StarsGroup {
    static TEXTURE_MAX_WIDTH = 1024;
    static FLOATS_PER_STAR = 8;

    dataTexture: THREE.Texture;
    ibGeometry: THREE.InstancedBufferGeometry;

    shader: THREE.ShaderMaterial;

    mesh: THREE.Mesh;

    constructor(astro: any) {
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
        const n = stars.length;
        const m = n * StarsGroup.FLOATS_PER_STAR;

        this.dataTexture = new THREE.DataTexture(
            new Float32Array(data), 
            Math.min(m, StarsGroup.TEXTURE_MAX_WIDTH),
            Math.ceil(m / StarsGroup.TEXTURE_MAX_WIDTH),
            THREE.RGBAFormat, THREE.FloatType,
        );

        this.shader = new THREE.ShaderMaterial({
            uniforms: {
                dataTexture: { value: this.dataTexture },
            },
            vertexShader: vsStar,
            fragmentShader: fsStar,
            transparent: true,
        });

        this.ibGeometry = new THREE.InstancedBufferGeometry();
        // dummy position, not used
        this.ibGeometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));
        this.ibGeometry.instanceCount = n;

        this.mesh = new THREE.Mesh(this.ibGeometry, this.shader);
    }

    dispose() {
        this.ibGeometry.dispose();
        this.dataTexture?.dispose();
        this.shader.dispose();
    }
}


export { StarsGroup };