"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLogger = void 0;
const common_1 = require("@nestjs/common");
const string_format_1 = __importDefault(require("string-format"));
class AbstractLogger extends common_1.Logger {
    log(message, ...optionalParams) {
        super.log(this._formatting(message, optionalParams));
    }
    error(message, ...optionalParams) {
        super.error(this._formatting(message, optionalParams));
    }
    warn(message, ...optionalParams) {
        super.warn(this._formatting(message, optionalParams));
    }
    debug(message, ...optionalParams) {
        super.debug && this.debug(this._formatting(message, optionalParams));
    }
    verbose(message, ...optionalParams) {
        super.verbose && this.verbose(this._formatting(message, optionalParams));
    }
    _stringifyObject(input) {
        if (input instanceof Object) {
            return JSON.stringify(input);
        }
        return input;
    }
    _formatting(message, optionalParams) {
        if (optionalParams.length > 0) {
            return (0, string_format_1.default)(message, ...optionalParams.map(this._stringifyObject));
        }
        return message;
    }
}
exports.AbstractLogger = AbstractLogger;
//# sourceMappingURL=allience-cs.logger.js.map