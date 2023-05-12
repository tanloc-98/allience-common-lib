/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logger } from '@nestjs/common';
import format from 'string-format';

export class AbstractLogger extends Logger {
    /**
     * Write a 'log' level log.
     */
    log(message: any, ...optionalParams: any[]): void {
        super.log(this._formatting(message, optionalParams));
    }

    /**
     * Write an 'error' level log.
     */
    error(message: any, ...optionalParams: any[]): void {
        super.error(this._formatting(message, optionalParams));
    }

    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]): void {
        super.warn(this._formatting(message, optionalParams));
    }

    /**
     * Write a 'debug' level log.
     */
    debug(message: any, ...optionalParams: any[]): void {
        super.debug && this.debug(this._formatting(message, optionalParams));
    }

    /**
     * Write a 'verbose' level log.
     */
    verbose(message: any, ...optionalParams: any[]): void {
        super.verbose && this.verbose(this._formatting(message, optionalParams));
    }

    private _stringifyObject(input: any): string | any {
        if (input instanceof Object) {
            return JSON.stringify(input);
        }
        return input;
    }

    private _formatting(message: any, optionalParams: any[]): string {
        if (optionalParams.length > 0) {
            return format(message, ...optionalParams.map(this._stringifyObject));
        }
        return message as string;
    }
}
