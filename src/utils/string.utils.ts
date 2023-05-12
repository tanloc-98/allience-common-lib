/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Format from 'string-format';

/**
 * The string utils to support validation and transform data
 */
export class StringUtils {
    public static readonly CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    /**
     * Format the string with arguments
     * @param input The message input
     * @param args The argument inside message input
     * @returns The result has been formatted
     */
    public static format(input: string, ...args: any[]): string {
        return Format(input, args);
    }

    /**
     * Concat the Array string to string with _ symbol
     * @param str The string arguments
     * @returns The string has been concat
     */
    public static concatWithSymbol(...str: string[]): string {
        const symbol = '_';
        if (str.length === 0) {
            throw new Error('Require the argument values');
        }
        return str.join(symbol);
    }

    /**
     * Concat the Array string to string
     * @param str The array string
     * @returns The string has been concat
     */
    public static concat(...str: string[]): string {
        if (str.length === 0) {
            throw new Error('Require the argument values');
        }
        return str.join();
    }

    /**
     * Random the string with size
     * @param len The size of string. Default is 5
     * @param lowerCase LowerCase the string. Default is false
     * @returns The random string
     */
    public static random(len = 5, lowerCase = false): string {
        const result = [...Array(len)].reduce<string>(StringUtils._generate, '');
        if (lowerCase) {
            return result.toLowerCase();
        }
        return result;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private static _generate<T>(result: any, _args: T): string {
        return (result += StringUtils.CHARSET[Math.floor(Math.random() * StringUtils.CHARSET.length)]);
    }

    /**
     * Support to transform array to string
     * @param array The input array
     * @param symbol The symbol between each item in array
     * @returns The string have been transformed
     */
    public static fromArray(array: any[], symbol = ''): string {
        if (array.length === 0) {
            throw new Error('Require the argument values');
        }
        return array.join(symbol);
    }

    /**
     *  Support to remove the accent
     * @param str The input string
     * @returns The string has been remove accent
     */
    public static removeAccent(str: string, lowerCase = false): string {
        str = str.replace(/\s+/g, ' ');
        str.trim();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        if (lowerCase) {
            return str.toLowerCase();
        }
        return str;
    }
}
