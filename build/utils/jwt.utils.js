"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtUtils = void 0;
const string_utils_1 = require("./string.utils");
class JwtUtils {
    static getTokenFromBearerAuthorization(authorization) {
        if (!authorization || !authorization.trim().startsWith('Bearer ')) {
            throw Error(string_utils_1.StringUtils.format('Value must be BearerAuthorization -> {}', authorization));
        }
        const split = authorization.trim().split(' ');
        const token = split[1];
        if (!token.startsWith('ey')) {
            throw Error(string_utils_1.StringUtils.format('Value must be JWT Token  -> {}', token));
        }
        return token;
    }
}
exports.JwtUtils = JwtUtils;
//# sourceMappingURL=jwt.utils.js.map