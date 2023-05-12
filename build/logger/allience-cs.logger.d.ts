import { Logger } from '@nestjs/common';
export declare class AbstractLogger extends Logger {
    log(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    debug(message: any, ...optionalParams: any[]): void;
    verbose(message: any, ...optionalParams: any[]): void;
    private _stringifyObject;
    private _formatting;
}
//# sourceMappingURL=allience-cs.logger.d.ts.map