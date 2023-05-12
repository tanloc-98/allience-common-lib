import { ArgumentsHost, ExceptionFilter, HttpAdapterHost } from '@nestjs/common';
export declare class GlobalExceptionsFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    constructor(httpAdapterHost: HttpAdapterHost);
    catch(exception: Error, host: ArgumentsHost): void;
}
//# sourceMappingURL=global-exception.filter.d.ts.map