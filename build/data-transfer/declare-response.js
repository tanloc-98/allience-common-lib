"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultResponse = exports.BaseResponse = exports.StatusResponse = void 0;
var StatusResponse;
(function (StatusResponse) {
    StatusResponse["SUCCESS"] = "success";
    StatusResponse["ERROR"] = "error";
    StatusResponse["WARNING"] = "warning";
    StatusResponse["DANGER"] = "danger";
})(StatusResponse = exports.StatusResponse || (exports.StatusResponse = {}));
class BaseResponse {
    constructor() {
        this.status = StatusResponse.SUCCESS;
        this.statusCode = 200;
        this.message = '';
        this.timestamp = new Date().getMilliseconds();
    }
}
exports.BaseResponse = BaseResponse;
class ResultResponse {
}
exports.ResultResponse = ResultResponse;
//# sourceMappingURL=declare-response.js.map