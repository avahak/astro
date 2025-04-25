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
     * Stores a value, evaluating functions only if specified
     */
    store<T>(key: any, value: T | (() => T), allowFunctionCall: boolean=true): T {
        const storedValue = (allowFunctionCall && typeof value === 'function') ? (value as (() => T))() : (value as T);
        this.state.set(key, storedValue);
        return storedValue;
    }

    /**
     * Stores a value only if the key doesn't exist, evaluating functions only if specified
     */
    storeOnce<T>(key: unknown, value: T | (() => T), allowFunctionCall: boolean=true): T {
        if (this.state.has(key))
            return this.state.get(key);
        return this.store(key, value, allowFunctionCall);
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