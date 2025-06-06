import * as THREE from 'three';

/**
 * Stores data for multi-channel signed distance field font atlas. Each font is loaded
 * from two files - the atlas image and a JSON file containing font metadata.
 * 
 * The fonts files are generated using https://github.com/Chlumsky/msdf-atlas-gen
 * NOTE We manually process the atlas after generating it to clean up the padding area,
 * because without this cleaning mipmapping (and antialiasing) causes artifacts.
 */
class MCSDFFont {
    name: string|null;
    layoutData: any;
    glyphLookup: Record<number, any>;
    kerningLookup: Record<number, Record<number, number>>;
    atlas: THREE.Texture|null;

    constructor() {
        this.name = null;
        this.atlas = null;
        this.layoutData = { };
        this.glyphLookup = { };
        this.kerningLookup = { };
    }

    /**
     * Loads the font layout data (.json file) fully and starts loading the atlas,
     * but does not wait for image data to load.
     */
    async load(name: string, onLoad?: (data: THREE.Texture) => void) {
        this.name = name;

        let textureLoaded = false;
        let metadataLoaded = false;
        const checkAllLoaded = () => {
            if (textureLoaded && metadataLoaded && onLoad)
                onLoad(this.atlas!);
        };

        this.atlas = new THREE.TextureLoader().load(
            `/astro/fonts/${this.name}.png`, 
            (texture) => {
                textureLoaded = true;
                texture.anisotropy = 4;
                texture.needsUpdate = true;
                // Careful with mipmapping here - need padding in the font atlases and
                // need to clean up the padding by removing the single color areas in padding zones
                // (using pad.py).
                // this.atlas.generateMipmaps = false;
                // this.atlas.minFilter = THREE.LinearFilter;
                // this.atlas.magFilter = THREE.LinearFilter;
                checkAllLoaded();
            }
        );

        try {
            const response = await fetch(`/astro/fonts/${this.name}.json`);
            if (!response.ok) {
                throw new Error('Failed to fetch JSON file');
            }
            this.layoutData = await response.json();
            this.createLookups();
            metadataLoaded = true;
            checkAllLoaded();
        } catch (error) {
            console.error('Error loading JSON:', error);
            throw error;
        }
    }

    /**
     * Computes glyphLookup and kerningLookup.
     */
    private createLookups() {
        this.glyphLookup = { };
        this.layoutData.glyphs.forEach((glyph: any) => {
            this.glyphLookup[glyph.unicode] = glyph;
        });

        this.kerningLookup = { };
        this.layoutData.kerning.forEach((entry: any) => {
            this.kerningLookup[entry.unicode1] ??= { };
            this.kerningLookup[entry.unicode1][entry.unicode2] = entry.advance;
        });
    }

    dispose() {
        this.atlas?.dispose();
    }
}

export { MCSDFFont };