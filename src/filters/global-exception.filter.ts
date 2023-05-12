/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Catch, ArgumentsHost, ExceptionFilter, HttpAdapterHost, HttpException, HttpStatus } from '@nestjs/common';
import { Builder } from 'builder-pattern';

import { BaseResponse, StatusResponse } from '../data-transfer';
import { GlobalException } from './global.exception';

@Catch(GlobalException)
export class GlobalExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: Error, host: ArgumentsHost): void {
        // In certain situations `httpAdapter` might not be available in the
        // constructor method, thus we should resolve it here.
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        const responseBody = Builder<BaseResponse>()
            .message(exception.message)
            .status(StatusResponse.ERROR)
            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
            .path(ctx.getRequest().url)
            .build();

        httpAdapter.reply(ctx.getResponse(), responseBody, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
