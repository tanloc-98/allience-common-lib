import { RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CommonLogger } from '../logger/common.logger';
import { GlobalGrpcException } from './global.exception';
export declare class GlobalGrpcExceptionFilter extends CommonLogger implements RpcExceptionFilter<GlobalGrpcException> {
    catch(exception: GlobalGrpcException, host: ArgumentsHost): Observable<any>;
}
//# sourceMappingURL=global-grpc-exception.filter.d.ts.map