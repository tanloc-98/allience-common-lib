/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataSource, getConnectionManager } from 'typeorm';

import { solveTypeORM } from './../constant/database.constant';

export const createCustomConnection = (tenant: string, config: any, override?: any) => {
    try {
        const connectionManager = getConnectionManager();
        return Promise.resolve(connectionManager.get(tenant));
    } catch (error) {
        return new DataSource({
            ...solveTypeORM(config),
            name: tenant,
            schema: tenant,
            ...override,
        }).initialize();
    }
};
