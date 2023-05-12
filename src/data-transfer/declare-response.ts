export enum StatusResponse {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    DANGER = 'danger',
}

export class BaseResponse {
    status = StatusResponse.SUCCESS;
    statusCode = 200;
    message = '';
    timestamp = new Date().getMilliseconds();
    path?: string;
    detailCode?: number;
}

export class ResultResponse<D> {
    totalResult: number;
    total: number;
    limit: number;
    offset: number;
    data: Array<D> | [];
}
