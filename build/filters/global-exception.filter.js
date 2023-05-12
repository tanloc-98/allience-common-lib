"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const builder_pattern_1 = require("builder-pattern");
const data_transfer_1 = require("../data-transfer");
const global_exception_1 = require("./global.exception");
let GlobalExceptionsFilter = class GlobalExceptionsFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        const responseBody = (0, builder_pattern_1.Builder)()
            .message(exception.message)
            .status(data_transfer_1.StatusResponse.ERROR)
            .statusCode(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
            .path(ctx.getRequest().url)
            .build();
        httpAdapter.reply(ctx.getResponse(), responseBody, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
};
GlobalExceptionsFilter = __decorate([
    (0, common_1.Catch)(global_exception_1.GlobalException),
    __metadata("design:paramtypes", [Object])
], GlobalExceptionsFilter);
exports.GlobalExceptionsFilter = GlobalExceptionsFilter;
//# sourceMappingURL=global-exception.filter.js.map