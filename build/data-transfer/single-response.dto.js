"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleResponse = void 0;
const declare_response_1 = require("./declare-response");
class SingleResponse {
    constructor() {
        this.status = declare_response_1.StatusResponse.SUCCESS;
        this.statusCode = 200;
        this.message = '';
        this.timestamp = new Date().getMilliseconds();
    }
}
exports.SingleResponse = SingleResponse;
//# sourceMappingURL=single-response.dto.js.map