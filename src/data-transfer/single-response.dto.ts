import { StatusResponse } from './declare-response';

export class SingleResponse<D> {
    status = StatusResponse.SUCCESS;
    statusCode = 200;
    message = '';
    timestamp = new Date().getMilliseconds();
    data: D | null;
    path?: string;
}
