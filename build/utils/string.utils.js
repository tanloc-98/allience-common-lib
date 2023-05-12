"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
const string_format_1 = __importDefault(require("string-format"));
class StringUtils {
    static format(input, ...args) {
        return (0, string_format_1.default)(input, args);
    }
    static concatWithSymbol(...str) {
        const symbol = '_';
        if (str.length === 0) {
            throw new Error('Require the argument values');
        }
        return str.join(symbol);
    }
    static concat(...str) {
        if (str.length === 0) {
            throw new Error('Require the argument values');
        }
        return str.join();
    }
    static random(len = 5, lowerCase = false) {
        const result = [...Array(len)].reduce(StringUtils._generate, '');
        if (lowerCase) {
            return result.toLowerCase();
        }
        return result;
    }
    static _generate(result, _args) {
        return (result += StringUtils.CHARSET[Math.floor(Math.random() * StringUtils.CHARSET.length)]);
    }
    static fromArray(array, symbol = '') {
        if (array.length === 0) {
            throw new Error('Require the argument values');
        }
        return array.join(symbol);
    }
    static removeAccent(str, lowerCase = false) {
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
exports.StringUtils = StringUtils;
StringUtils.CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//# sourceMappingURL=string.utils.js.map