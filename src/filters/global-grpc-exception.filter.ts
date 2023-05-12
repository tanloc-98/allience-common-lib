/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpStatus } from '@nestjs/common';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Builder } from 'builder-pattern';

import { BaseResponse, StatusResponse } from '../data-transfer';
import { CommonLogger } from '../logger/common.logger';
import { GlobalGrpcException, GrpcExceptionResponse } from './global.exception';

@Catch(GlobalGrpcException)
export class GlobalGrpcExceptionFilter extends CommonLogger implements RpcExceptionFilter<GlobalGrpcException> {
    catch(exception: GlobalGrpcException, host: ArgumentsHost): Observable<any> {
        const err = exception.getError() as GrpcExceptionResponse;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        response.json(
            Builder<BaseResponse>()
                .message(err.details)
                .detailCode(err.code)
                .status(StatusResponse.ERROR)
                .statusCode(HttpStatus.SERVICE_UNAVAILABLE)
                .path(request.url)
                .build(),
        );
        return;
    }
}
