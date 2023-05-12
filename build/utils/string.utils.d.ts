export declare class StringUtils {
    static readonly CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    static format(input: string, ...args: any[]): string;
    static concatWithSymbol(...str: string[]): string;
    static concat(...str: string[]): string;
    static random(len?: number, lowerCase?: boolean): string;
    private static _generate;
    static fromArray(array: any[], symbol?: string): string;
    static removeAccent(str: string, lowerCase?: boolean): string;
}
//# sourceMappingURL=string.utils.d.ts.map