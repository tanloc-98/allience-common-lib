"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveTypeORM = exports.CORE_SCHEMA = void 0;
exports.CORE_SCHEMA = 'test';
const solveTypeORM = (dbConfig, override) => (Object.assign({ type: process.env.RDS_DB_TYPE || dbConfig.type, schema: exports.CORE_SCHEMA, name: exports.CORE_SCHEMA, host: process.env.RDS_HOSTNAME || dbConfig.host, port: process.env.RDS_PORT || dbConfig.port, username: process.env.RDS_USERNAME || dbConfig.username, password: process.env.RDS_PASSWORD || dbConfig.password, database: process.env.RDS_DB_NAME || dbConfig.database, synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize }, override));
exports.solveTypeORM = solveTypeORM;
//# sourceMappingURL=database.constant.js.map