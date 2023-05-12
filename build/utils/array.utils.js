"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
const lodash_1 = require("lodash");
class ArrayUtils {
    static isArray(input) {
        return (0, lodash_1.isArray)(input);
    }
    static isEmpty(input) {
        return (0, lodash_1.isEmpty)(input);
    }
    static isNotEmpty(input) {
        return (0, lodash_1.isEmpty)(input);
    }
    static isAllEmpty(inputs) {
        return inputs.every((input) => ArrayUtils.isEmpty(input));
    }
    static isAllNotEmpty(inputs) {
        return inputs.every((input) => ArrayUtils.isNotEmpty(input));
    }
    static toSet(inputs) {
        return new Set([...inputs]);
    }
    static fromSet(inputs) {
        return [...inputs];
    }
}
exports.ArrayUtils = ArrayUtils;
//# sourceMappingURL=array.utils.js.map