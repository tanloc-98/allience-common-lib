/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const CORE_SCHEMA = 'test';

export const solveTypeORM = (dbConfig: any, override?: any) => ({
    type: process.env.RDS_DB_TYPE || dbConfig.type,
    schema: CORE_SCHEMA,
    name: CORE_SCHEMA,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
    ...override,
});
