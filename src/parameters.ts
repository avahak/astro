import * as math from 'mathjs';
import { planetPosition } from "./astro/ephemeris/orbitalElements";
import { cst } from "./astro/constants";
import { Vec } from './astro/math/vec';
import { GeoLocation } from './astro/types';

type ViewDirection = {
    phi: number;        // azimuthal angle on the xy-plane
    theta: number;      // signed angle from xy-plane
};

class SceneParameters {
    viewDirection!: ViewDirection;
    viewMatrix!: number[]; 
    focalLength!: number;

    t!: number;
    location!: GeoLocation;
    horizonMatrix!: number[][];
    
    pSun!: number[];
    pMoon!: number[];
    pJupiter!: number[];
    // planetPos: Map<number, number[]|null> = new Map();

    constructor() {
        this.setView({ viewDirection: { phi: 0, theta: Math.PI/2 }, focalLength: 1.0 });
        // this.setTimeAndOrLocation({ t: 0.2, location: cst.EARTH_LOC_DICT["Helsinki"] });
        this.setTimeAndOrLocation({ t: 0.2, location: cst.EARTH_LOC_DICT["Singapore"] });
        // this.setTimeAndOrLocation({ t: 0.2, location: cst.EARTH_LOC_DICT["Utrecht"] });
    }

    setTimeAndOrLocation(update: { t?: number, location?: GeoLocation }) {
        if (update.t)
            this.t = update.t;
        if (update.location)
            this.location = update.location;

        this.horizonMatrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

        const pEarth = [0.7, 0.7, -0.2];
        this.pSun = math.multiply(pEarth, -1).valueOf() as number[];
        this.pMoon = math.multiply(this.horizonMatrix, planetPosition(301, this.t)!).valueOf() as number[];
        this.pJupiter = math.multiply(this.horizonMatrix, planetPosition(5, this.t)!).valueOf() as number[];

        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 301].forEach((code) => {
        //     let pos = planetPosition(code, this.t);
        //     this.planetPos.set(code, pos);
        // });
    }

    setView(update: { viewDirection?: ViewDirection, focalLength?: number }) {
        if (update.focalLength)
            this.focalLength = update.focalLength;
        if (update.viewDirection) {
            this.viewDirection = update.viewDirection;
            this.viewMatrix = math.transpose(math.multiply(
                Vec.rotationMatrix(2, this.viewDirection.phi), 
                Vec.rotationMatrix(1, this.viewDirection.theta-Math.PI/2)
            )).valueOf().flat() as number[];
        }
    }
}

export { SceneParameters };