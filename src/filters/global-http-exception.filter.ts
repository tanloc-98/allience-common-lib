import { GlobalHttpException } from './global.exception';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Builder } from 'builder-pattern';

import { BaseResponse, StatusResponse } from '../data-transfer';

@Catch(GlobalHttpException)
export class GlobalHttpExceptionFilter implements ExceptionFilter {
    catch(ext: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        response.json(
            Builder<BaseResponse>()
                .message(ext.message)
                .status(StatusResponse.ERROR)
                .statusCode(ext.getStatus())
                .path(request.url)
                .build(),
        );
    }
}
