import * as THREE from 'three';

function createIntervalLookup(array: number[]) {

}
// def create_interval_lookup(arr):
        //     # We assume that 0<=arr[k]<=1 for all k

        //     arr_distinct = sorted(set(arr))
        //     n0 = len(arr_distinct)
        //     n1 = least_common_denominator(arr_distinct)
        //     print(f'{n0 = }')
        //     print(f'{n1 = }')

        //     lut = np.zeros(n1, dtype=int)

        //     index = -1
        //     for k in range(n1):
        //         x = k / n1
        //         x2 = arr_distinct[(index+n0+1) % n0]
        //         if index < n0-1 and x + 1.0e-12 >= x2:
        //             index = (index+1) % n0
        //         lut[k] = (index+n0) % n0

class Constellations {
    cleanUpTasks: (() => void)[];

    constructor(astro: any) {
        this.cleanUpTasks = [];

        // this.setupScene();

        const cons = astro['constellations'];
        const raList = [];
        const deList = [];
        for (const con of cons) {
            const points = cons[con]['boundary_1875'];
            for (const p of points) {
                raList.push(points[0]);
                deList.push(points[1]);
            }
        }
        console.log('raList', raList);
        console.log('deList', deList);
    }

    cleanUp() {
        for (const task of this.cleanUpTasks)
            task();
    }

    setupScene() {
    }
}

export { Constellations };