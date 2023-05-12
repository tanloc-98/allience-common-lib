"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalGrpcExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const builder_pattern_1 = require("builder-pattern");
const data_transfer_1 = require("../data-transfer");
const common_logger_1 = require("../logger/common.logger");
const global_exception_1 = require("./global.exception");
let GlobalGrpcExceptionFilter = class GlobalGrpcExceptionFilter extends common_logger_1.CommonLogger {
    catch(exception, host) {
        const err = exception.getError();
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        response.json((0, builder_pattern_1.Builder)()
            .message(err.details)
            .detailCode(err.code)
            .status(data_transfer_1.StatusResponse.ERROR)
            .statusCode(common_1.HttpStatus.SERVICE_UNAVAILABLE)
            .path(request.url)
            .build());
        return;
    }
};
GlobalGrpcExceptionFilter = __decorate([
    (0, common_2.Catch)(global_exception_1.GlobalGrpcException)
], GlobalGrpcExceptionFilter);
exports.GlobalGrpcExceptionFilter = GlobalGrpcExceptionFilter;
//# sourceMappingURL=global-grpc-exception.filter.js.map