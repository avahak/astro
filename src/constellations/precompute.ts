import * as THREE from 'three';

function gcd(a: number, b: number): number {
    // console.log(a, b);
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

function rationalApproximation(value: number, maxDenominator: number=100000) {
    // See https://en.wikipedia.org/wiki/Continued_fraction
    let [a1, b1, a2, b2] = [1, 0, 0, 1];
    let x = value;
    
    while (x !== Infinity) {
        let xFloor = Math.floor(x);
        let a = xFloor * a1 + a2;
        let b = xFloor * b1 + b2;

        if (b > maxDenominator) 
            break; // Stop if denominator exceeds limit

        [a2, a1] = [a1, a];
        [b2, b1] = [b1, b];
        x = 1 / (x - xFloor);
    }

    return { numerator: a1, denominator: b1, error: Math.abs(value-a1/b1) };
}

function leastCommonDenominator(arr: number[]): number {
    const denominators = arr.map((num) => {
        const fraction = rationalApproximation(num);
        return fraction.denominator;
    });

    // Compute the LCM of all denominators
    return denominators.reduce((acc, val) => lcm(acc, val), 1);
}

function createIntervalLookup(arr: number[]) {
    const arrSet = new Set<number>(arr);
    const arrDistinct = [...arrSet].sort((a, b) => a - b);

    const n0 = arrDistinct.length;
    const n1 = leastCommonDenominator(arrDistinct);

    const lut = new Array<number>(n1).fill(-1);

    let index = -1;
    for (let k = 0; k < n1; k++) {
        const x = k / n1;
        const x2 = arrDistinct[(index+n0+1) % n0];
        if ((index < n0-1) && (x + 1.0e-12 >= x2)) {
            index = (index+1) % n0;
        }
        lut[k] = (0.5 + ((index+n0) % n0)) / n0;
    }

    return lut;
}

class Constellations {
    static MAX_WIDTH = 1024;
    cleanUpTasks: (() => void)[];
    raTexture: THREE.DataTexture;
    deTexture: THREE.DataTexture;
    conTexture: THREE.Texture;
    size: [number, number];     // size of lookup tables

    constructor(astro: any) {
        this.cleanUpTasks = [];

        // this.setupScene();

        const cons = astro['constellations'];
        const raList = [];
        const deList = [];
        for (const con of Object.keys(cons)) {
            if (!cons[con]['boundary_1875'])
                continue;
            const points = cons[con]['boundary_1875'];
            for (const p of points) {
                raList.push(p[0]);
                deList.push(p[1]);
            }
        }
        const raLut = createIntervalLookup(raList.map((v) => v/(2*Math.PI)));
        const deLut = createIntervalLookup(deList.map((v) => 0.5+v/Math.PI));
        this.size = [raLut.length, deLut.length];

        const createTexture = (data: number[]) => {
            const w = Math.min(Constellations.MAX_WIDTH, data.length);
            const h = Math.ceil(data.length / Constellations.MAX_WIDTH);
            const paddedArray = new Float32Array(w*h);
            paddedArray.set(data);
            const texture = new THREE.DataTexture(
                paddedArray, w, h, THREE.RedFormat, THREE.FloatType
            );
            texture.generateMipmaps = false;
            // texture.minFilter = THREE.LinearFilter;
            // texture.magFilter = THREE.LinearFilter;
            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
            texture.needsUpdate = true;
            return texture;
        };

        this.raTexture = createTexture(raLut);
        this.deTexture = createTexture(deLut);

        const textureLoader = new THREE.TextureLoader();
        this.conTexture = textureLoader.load('/astro/cons.png');
        this.conTexture.colorSpace = THREE.NoColorSpace;
        this.conTexture.generateMipmaps = false;
        this.conTexture.minFilter = THREE.NearestFilter;
        this.conTexture.magFilter = THREE.NearestFilter;
        this.conTexture.wrapS = THREE.ClampToEdgeWrapping;
        this.conTexture.wrapT = THREE.ClampToEdgeWrapping;
    }

    cleanUp() {
        for (const task of this.cleanUpTasks)
            task();
        this.raTexture.dispose();
        this.deTexture.dispose();
        this.conTexture.dispose();
    }
}

export { Constellations };