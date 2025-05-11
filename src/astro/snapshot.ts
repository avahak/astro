import { Time } from "./time/time";
import { GeoLocation } from "./types";

/**
 * Snapshot of states (positions, velocities, etc.) at one moment of time and a point of view 
 * (observer). Can be used to avoid having to recompute values that might be computed multiple 
 * times.
 */
class Snapshot {
    time: Time;
    observer: GeoLocation;
    state: Map<any, any>;

    constructor(time: Time, observer: GeoLocation) {
        this.time = time;
        this.observer = observer;
        this.state = new Map();
    }

    /**
     * Sets a value, or a function call computing the value
     */
    set<T>(key: any, value: T | (() => T)): T {
        const storedValue = (typeof value === 'function') ? (value as (() => T))() : (value as T);
        this.state.set(key, storedValue);
        return storedValue;
    }

    /**
     * Sets a value only if the key doesn't exist
     */
    setOnce<T>(key: unknown, value: T | (() => T)): T {
        if (this.state.has(key))
            return this.state.get(key);
        return this.set(key, value);
    }

    /**
     * Reads the value from the map or if it does not exist, returns `defaultFn()`
     */
    get<T>(key: any, defaultFn?: () => any): T | undefined {
        if (this.state.has(key))
            return this.state.get(key);
        return defaultFn ? defaultFn() : undefined;
    }
}


export { Snapshot };