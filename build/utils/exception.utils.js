"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwCatchError = void 0;
const rxjs_1 = require("rxjs");
function throwCatchError(e, caught, callback) {
    if (callback) {
        callback();
    }
    return (0, rxjs_1.of)(e);
}
exports.throwCatchError = throwCatchError;
//# sourceMappingURL=exception.utils.js.map