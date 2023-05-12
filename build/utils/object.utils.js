"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
const lodash_1 = require("lodash");
class ObjectUtils {
    static isPresent(object) {
        return (0, lodash_1.isObject)(object);
    }
    static isNotPresent(object) {
        return !(0, lodash_1.isObject)(object);
    }
    static isAllPresent(objects) {
        return objects.every((object) => ObjectUtils.isPresent(object));
    }
    static isAllNotPresent(objects) {
        return objects.every((object) => ObjectUtils.isNotPresent(object));
    }
    static clone(object) {
        return (0, lodash_1.clone)(object);
    }
    static cloneDeep(object) {
        return (0, lodash_1.cloneDeep)(object);
    }
}
exports.ObjectUtils = ObjectUtils;
//# sourceMappingURL=object.utils.js.map