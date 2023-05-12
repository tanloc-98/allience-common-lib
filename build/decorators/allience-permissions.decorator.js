"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustPermissions = exports.HRM_PERMISSIONS_KEY = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const guards_1 = require("../guards");
const permission_guard_1 = require("../guards/permission.guard");
exports.HRM_PERMISSIONS_KEY = 'hrm-permissions';
function MustPermissions(...permissions) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.HRM_PERMISSIONS_KEY, permissions), (0, common_1.UseGuards)((0, passport_1.AuthGuard)(guards_1.GUARD_TOKEN_JWT), permission_guard_1.PermissionGuard));
}
exports.MustPermissions = MustPermissions;
//# sourceMappingURL=allience-permissions.decorator.js.map