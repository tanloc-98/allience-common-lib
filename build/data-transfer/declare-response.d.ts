export declare enum StatusResponse {
    SUCCESS = "success",
    ERROR = "error",
    WARNING = "warning",
    DANGER = "danger"
}
export declare class BaseResponse {
    status: StatusResponse;
    statusCode: number;
    message: string;
    timestamp: number;
    path?: string;
    detailCode?: number;
}
export declare class ResultResponse<D> {
    totalResult: number;
    total: number;
    limit: number;
    offset: number;
    data: Array<D> | [];
}
//# sourceMappingURL=declare-response.d.ts.map