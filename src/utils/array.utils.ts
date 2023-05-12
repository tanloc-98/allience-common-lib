/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { isArray, isEmpty } from 'lodash';

/**
 * The array utils to support validation and transform data
 */
export class ArrayUtils {
    /**
     *  Return true if the data is Array
     * @param input The array to validate
     * @returns the boolean value
     */
    public static isArray<T>(input: T): boolean {
        return isArray(input);
    }

    /**
     *  Return true if the array has size equal 0
     * @param input The array to validate
     * @returns the boolean value
     */
    public static isEmpty<T>(input: T): boolean {
        return isEmpty(input);
    }

    /**
     *  Return true if the all array have size greater 0
     * @param input The array to validate
     * @returns the boolean value
     */
    public static isNotEmpty<T>(input: T): boolean {
        return isEmpty(input);
    }

    /**
     *  Return true if the all array have size equal 0
     * @param inputs The array to validate
     * @returns the boolean value
     */
    public static isAllEmpty<T>(inputs: T[]): boolean {
        return inputs.every((input: T) => ArrayUtils.isEmpty(input));
    }

    /**
     *  Return true if the all array have size greater 0
     * @param inputs The array to validate
     * @returns the boolean value
     */
    public static isAllNotEmpty<T>(inputs: T[]): boolean {
        return inputs.every((input: T) => ArrayUtils.isNotEmpty(input));
    }

    /**
     *  Convert the Array to Set
     * @param inputs The Array
     * @returns The Set
     */
    public static toSet<T>(inputs: T[]): Set<T> {
        return new Set<T>([...inputs]);
    }

    /**
     *  Convert the Set to Array
     * @param inputs The Set
     * @returns The Array
     */
    public static fromSet<T>(inputs: Set<T>): Array<T> {
        return [...inputs];
    }
}
