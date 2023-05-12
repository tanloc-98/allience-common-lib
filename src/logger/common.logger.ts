import { AbstractLogger } from './allience-cs.logger';
export class CommonLogger {
    __logger = new AbstractLogger(this.constructor.name);
}
