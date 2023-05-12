"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomConnection = void 0;
const typeorm_1 = require("typeorm");
const database_constant_1 = require("./../constant/database.constant");
const createCustomConnection = (tenant, config, override) => {
    try {
        const connectionManager = (0, typeorm_1.getConnectionManager)();
        return Promise.resolve(connectionManager.get(tenant));
    }
    catch (error) {
        return new typeorm_1.DataSource(Object.assign(Object.assign(Object.assign({}, (0, database_constant_1.solveTypeORM)(config)), { name: tenant, schema: tenant }), override)).initialize();
    }
};
exports.createCustomConnection = createCustomConnection;
//# sourceMappingURL=connection.utils.js.map