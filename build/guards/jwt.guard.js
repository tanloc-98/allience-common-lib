"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = exports.GUARD_TOKEN_JWT = void 0;
const passport_1 = require("@nestjs/passport");
exports.GUARD_TOKEN_JWT = 'jwt';
class JwtGuard extends (0, passport_1.AuthGuard)(exports.GUARD_TOKEN_JWT) {
}
exports.JwtGuard = JwtGuard;
//# sourceMappingURL=jwt.guard.js.map