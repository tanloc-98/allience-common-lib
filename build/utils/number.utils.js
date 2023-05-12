"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
class NumberUtils {
    static trunc(target, precision = NumberUtils.PRECISION_TWO) {
        const numPower = Math.pow(10, precision);
        return ~~(target * numPower) / numPower;
    }
}
exports.NumberUtils = NumberUtils;
NumberUtils.PRECISION_ONE = 1;
NumberUtils.PRECISION_TWO = 2;
NumberUtils.PRECISION_THREE = 3;
NumberUtils.PRECISION_FOUR = 5;
NumberUtils.PRECISION_FIVE = 6;
//# sourceMappingURL=number.utils.js.map