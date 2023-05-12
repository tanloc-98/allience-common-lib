/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { isObject, cloneDeep, clone } from 'lodash';

/**
 * The object utils to support validation and transform data
 */
export class ObjectUtils {
    /**
     *  Return true if the data is object
     * @param object The object to validate
     * @returns the boolean value
     */
    public static isPresent<T>(object: T): boolean {
        return isObject(object);
    }

    /**
     *  Return true if the data is not object
     * @param object The object to validate
     * @returns the boolean value
     */
    public static isNotPresent<T>(object: T): boolean {
        return !isObject(object);
    }

    /**
     *  Return true if the all data is object
     * @param object[] The object to validate
     * @returns the boolean value
     */
    public static isAllPresent<T>(objects: T[]): boolean {
        return objects.every((object: T) => ObjectUtils.isPresent(object));
    }

    /**
     *  Return true if the all data is not object
     * @param object[] The object to validate
     * @returns the boolean value
     */
    public static isAllNotPresent<T>(objects: T[]): boolean {
        return objects.every((object: T) => ObjectUtils.isNotPresent(object));
    }

    /**
     * This method is like clone except that it recursively clones value.
     * @param object The object to clone
     * @returns The new object
     */
    public static clone<T>(object: T): T {
        return clone(object);
    }

    /**
     * This method is like clone except that it recursively clones value.
     * @param object The object to clone
     * @returns The new object
     */
    public static cloneDeep<T>(object: T): T {
        return cloneDeep(object);
    }
}
