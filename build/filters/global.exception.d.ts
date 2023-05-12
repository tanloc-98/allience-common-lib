import { HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, OperatorFunction } from 'rxjs';
import { IBuilder } from 'builder-pattern';
import { AbstractLogger } from '../logger';
import { BuilderInstanceStatic, StaticImplements } from '../base/helper.base';
import { GlobalHttpExceptionFilter } from './global-http-exception.filter';
import { GlobalGrpcExceptionFilter } from './global-grpc-exception.filter';
import { GlobalExceptionsFilter } from './global-exception.filter';
export declare const GLOBAL_APPLY_FILTER: (typeof GlobalHttpExceptionFilter | typeof GlobalGrpcExceptionFilter | typeof GlobalExceptionsFilter)[];
export declare class GlobalGrpcException extends RpcException {
}
export declare class GlobalHttpException extends HttpException {
}
export declare class GlobalException extends Error {
}
export type GlobalAllException = GlobalGrpcException | GlobalHttpException | GlobalException;
export type ActionErrorFunction = (payload: any, logger: AbstractLogger) => Observable<never>;
export declare class OverrideRetryError implements StaticImplements<BuilderInstanceStatic<OverrideRetryError>, typeof OverrideRetryError> {
    count: number;
    delay: number;
    static newInstance(cls?: OverrideRetryError): IBuilder<OverrideRetryError>;
}
export interface GrpcExceptionResponse {
    code: number;
    details: string;
    metadata: unknown;
}
export interface HttpExceptionResponse {
    status: number;
    response: object;
}
export declare function retryAndThrowGRPCErrorHandler<T>(__logger: AbstractLogger, failureAction?: ActionErrorFunction, config?: OverrideRetryError): OperatorFunction<any, T | Observable<never>>;
export declare function retryAndThrowHttpErrorHandler<T>(__logger: AbstractLogger, failureAction?: ActionErrorFunction, config?: OverrideRetryError): OperatorFunction<any, T | Observable<never>>;
export declare function retryAndThrowGlobalErrorHandler<T>(__logger: AbstractLogger, failureAction?: ActionErrorFunction, config?: OverrideRetryError): OperatorFunction<any, T | Observable<never>>;
//# sourceMappingURL=global.exception.d.ts.map