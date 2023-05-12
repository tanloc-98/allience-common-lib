"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonLogger = void 0;
const allience_cs_logger_1 = require("./allience-cs.logger");
class CommonLogger {
    constructor() {
        this.__logger = new allience_cs_logger_1.AbstractLogger(this.constructor.name);
    }
}
exports.CommonLogger = CommonLogger;
//# sourceMappingURL=common.logger.js.map