/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { catchError, retry, Observable, OperatorFunction, throwError } from 'rxjs';
import { Builder, IBuilder } from 'builder-pattern';

import { AbstractLogger } from '../logger';
import { GlobalGrpcConstant } from './../constant/global.constant';
import { BuilderInstanceStatic, StaticImplements } from '../base/helper.base';
import { GlobalHttpExceptionFilter } from './global-http-exception.filter';
import { GlobalGrpcExceptionFilter } from './global-grpc-exception.filter';
import { GlobalExceptionsFilter } from './global-exception.filter';

export const GLOBAL_APPLY_FILTER = [GlobalGrpcExceptionFilter, GlobalHttpExceptionFilter, GlobalExceptionsFilter];

export class GlobalGrpcException extends RpcException {}

export class GlobalHttpException extends HttpException {}

export class GlobalException extends Error {}

export type GlobalAllException = GlobalGrpcException | GlobalHttpException | GlobalException;

export type ActionErrorFunction = (payload: any, logger: AbstractLogger) => Observable<never>;

export class OverrideRetryError
    implements StaticImplements<BuilderInstanceStatic<OverrideRetryError>, typeof OverrideRetryError>
{
    count: number = GlobalGrpcConstant.EXCEPTION_RETRY_TIME;
    delay: number = GlobalGrpcConstant.EXCEPTION_RETRY_DURATION_MILLISECOND;

    public static newInstance(cls?: OverrideRetryError): IBuilder<OverrideRetryError> {
        if (cls) {
            Builder<OverrideRetryError>(cls);
        }
        return Builder<OverrideRetryError>(new OverrideRetryError());
    }
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

export function retryAndThrowGRPCErrorHandler<T>(
    __logger: AbstractLogger,
    failureAction?: ActionErrorFunction,
    config = OverrideRetryError.newInstance().build(),
): OperatorFunction<any, T | Observable<never>> {
    // Allow custom with callback function
    if (failureAction) {
        return handlerDetailAction<T>(__logger, failureAction, config);
    }

    // Auto convert to GrpcException
    return handlerDetailAction<T>(
        __logger,
        (err: any) => {
            const errorBuilder = Builder<GrpcExceptionResponse>()
                .code(err.code)
                .details(err.details)
                .metadata(err.metadata)
                .build();
            return throwError(() => new GlobalGrpcException(errorBuilder));
        },
        config,
    );
}

export function retryAndThrowHttpErrorHandler<T>(
    __logger: AbstractLogger,
    failureAction?: ActionErrorFunction,
    config = OverrideRetryError.newInstance().build(),
): OperatorFunction<any, T | Observable<never>> {
    // Allow custom with callback function
    if (failureAction) {
        return handlerDetailAction<T>(__logger, failureAction, config);
    }

    // Auto convert to GrpcException
    return handlerDetailAction<T>(
        __logger,
        (err: any) => {
            return throwError(() => new GlobalHttpException(err, err.code || 500));
        },
        config,
    );
}

export function retryAndThrowGlobalErrorHandler<T>(
    __logger: AbstractLogger,
    failureAction?: ActionErrorFunction,
    config = OverrideRetryError.newInstance().build(),
): OperatorFunction<any, T | Observable<never>> {
    // Allow custom with callback function
    if (failureAction) {
        return handlerDetailAction<T>(__logger, failureAction, config);
    }

    // Auto convert to GrpcException
    return handlerDetailAction<T>(
        __logger,
        (err: any) => {
            return throwError(() => new GlobalException(err));
        },
        config,
    );
}

function handlerDetailAction<T>(
    __logger: AbstractLogger,
    failureAction: ActionErrorFunction,
    config: OverrideRetryError,
): OperatorFunction<any, T | Observable<never>> {
    return (source: Observable<T>) =>
        source.pipe(
            retry(config),
            catchError(err => {
                __logger.error(`EXCEPTION_ERROR: {}`, err);
                return failureAction(err, __logger);
            }),
        );
}
