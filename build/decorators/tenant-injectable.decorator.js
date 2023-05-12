"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRequest = void 0;
const common_1 = require("@nestjs/common");
const TenantRequest = () => (0, common_1.applyDecorators)((0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }));
exports.TenantRequest = TenantRequest;
//# sourceMappingURL=tenant-injectable.decorator.js.map