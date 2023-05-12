import { StatusResponse } from './declare-response';
export declare class SingleResponse<D> {
    status: StatusResponse;
    statusCode: number;
    message: string;
    timestamp: number;
    data: D | null;
    path?: string;
}
//# sourceMappingURL=single-response.dto.d.ts.map