"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryAndThrowGlobalErrorHandler = exports.retryAndThrowHttpErrorHandler = exports.retryAndThrowGRPCErrorHandler = exports.OverrideRetryError = exports.GlobalException = exports.GlobalHttpException = exports.GlobalGrpcException = exports.GLOBAL_APPLY_FILTER = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const builder_pattern_1 = require("builder-pattern");
const global_constant_1 = require("./../constant/global.constant");
const global_http_exception_filter_1 = require("./global-http-exception.filter");
const global_grpc_exception_filter_1 = require("./global-grpc-exception.filter");
const global_exception_filter_1 = require("./global-exception.filter");
exports.GLOBAL_APPLY_FILTER = [global_grpc_exception_filter_1.GlobalGrpcExceptionFilter, global_http_exception_filter_1.GlobalHttpExceptionFilter, global_exception_filter_1.GlobalExceptionsFilter];
class GlobalGrpcException extends microservices_1.RpcException {
}
exports.GlobalGrpcException = GlobalGrpcException;
class GlobalHttpException extends common_1.HttpException {
}
exports.GlobalHttpException = GlobalHttpException;
class GlobalException extends Error {
}
exports.GlobalException = GlobalException;
class OverrideRetryError {
    constructor() {
        this.count = global_constant_1.GlobalGrpcConstant.EXCEPTION_RETRY_TIME;
        this.delay = global_constant_1.GlobalGrpcConstant.EXCEPTION_RETRY_DURATION_MILLISECOND;
    }
    static newInstance(cls) {
        if (cls) {
            (0, builder_pattern_1.Builder)(cls);
        }
        return (0, builder_pattern_1.Builder)(new OverrideRetryError());
    }
}
exports.OverrideRetryError = OverrideRetryError;
function retryAndThrowGRPCErrorHandler(__logger, failureAction, config = OverrideRetryError.newInstance().build()) {
    if (failureAction) {
        return handlerDetailAction(__logger, failureAction, config);
    }
    return handlerDetailAction(__logger, (err) => {
        const errorBuilder = (0, builder_pattern_1.Builder)()
            .code(err.code)
            .details(err.details)
            .metadata(err.metadata)
            .build();
        return (0, rxjs_1.throwError)(() => new GlobalGrpcException(errorBuilder));
    }, config);
}
exports.retryAndThrowGRPCErrorHandler = retryAndThrowGRPCErrorHandler;
function retryAndThrowHttpErrorHandler(__logger, failureAction, config = OverrideRetryError.newInstance().build()) {
    if (failureAction) {
        return handlerDetailAction(__logger, failureAction, config);
    }
    return handlerDetailAction(__logger, (err) => {
        return (0, rxjs_1.throwError)(() => new GlobalHttpException(err, err.code || 500));
    }, config);
}
exports.retryAndThrowHttpErrorHandler = retryAndThrowHttpErrorHandler;
function retryAndThrowGlobalErrorHandler(__logger, failureAction, config = OverrideRetryError.newInstance().build()) {
    if (failureAction) {
        return handlerDetailAction(__logger, failureAction, config);
    }
    return handlerDetailAction(__logger, (err) => {
        return (0, rxjs_1.throwError)(() => new GlobalException(err));
    }, config);
}
exports.retryAndThrowGlobalErrorHandler = retryAndThrowGlobalErrorHandler;
function handlerDetailAction(__logger, failureAction, config) {
    return (source) => source.pipe((0, rxjs_1.retry)(config), (0, rxjs_1.catchError)(err => {
        __logger.error(`EXCEPTION_ERROR: {}`, err);
        return failureAction(err, __logger);
    }));
}
//# sourceMappingURL=global.exception.js.map