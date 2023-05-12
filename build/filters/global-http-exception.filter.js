"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalHttpExceptionFilter = void 0;
const global_exception_1 = require("./global.exception");
const common_1 = require("@nestjs/common");
const builder_pattern_1 = require("builder-pattern");
const data_transfer_1 = require("../data-transfer");
let GlobalHttpExceptionFilter = class GlobalHttpExceptionFilter {
    catch(ext, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        response.json((0, builder_pattern_1.Builder)()
            .message(ext.message)
            .status(data_transfer_1.StatusResponse.ERROR)
            .statusCode(ext.getStatus())
            .path(request.url)
            .build());
    }
};
GlobalHttpExceptionFilter = __decorate([
    (0, common_1.Catch)(global_exception_1.GlobalHttpException)
], GlobalHttpExceptionFilter);
exports.GlobalHttpExceptionFilter = GlobalHttpExceptionFilter;
//# sourceMappingURL=global-http-exception.filter.js.map