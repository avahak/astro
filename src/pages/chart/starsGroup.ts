import * as THREE from 'three';

function starsGroup(astro: any) {
    const group = new THREE.Group();

    const stars = [];
    for (const star of astro.stars.data) {
        const obj: Record<string, any> = { };
        for (const [k, [field, _]] of astro.stars.descr.entries())
            obj[field] = star[k];
        stars.push(obj);
    }

    const geometry = new THREE.BufferGeometry();
                
    const positions = new Float32Array(stars.flatMap(p => []));
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return group;
}

export { starsGroup };