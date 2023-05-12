/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/prefer-function-type */
/* eslint-disable @typescript-eslint/ban-types */
import { IBuilder } from 'builder-pattern';

export type StaticImplements<I extends new (...args: any[]) => any, C extends I> = InstanceType<C>;

export interface BuilderInstanceStatic<T> {
    new (...args: any[]): T;
    newInstance(cls: T): IBuilder<T>;
}
