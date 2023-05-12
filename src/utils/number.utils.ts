/**
 * The number utils to support validation and transform data
 */
export class NumberUtils {
    public static readonly PRECISION_ONE = 1;
    public static readonly PRECISION_TWO = 2;
    public static readonly PRECISION_THREE = 3;
    public static readonly PRECISION_FOUR = 5;
    public static readonly PRECISION_FIVE = 6;

    /**
     * Support to transform the number
     * @param target The input number
     * @param precision The precision value, default is 2
     * @returns The number have been trunc
     */
    public static trunc(target: number, precision = NumberUtils.PRECISION_TWO): number {
        const numPower = Math.pow(10, precision);
        return ~~(target * numPower) / numPower;
    }
}
