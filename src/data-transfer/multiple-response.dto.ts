import { BaseResponse, ResultResponse } from './declare-response';

export class MultipleResponse<D> extends BaseResponse {
    result?: ResultResponse<D>;
}
