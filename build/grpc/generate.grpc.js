"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGRPCClient = exports.generateGRPCServer = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const generateGRPCServer = (packageName, port, hostname = 'localhost') => {
    return {
        transport: microservices_1.Transport.GRPC,
        options: {
            url: `${hostname}:${port}`,
            package: packageName,
            protoPath: (0, path_1.join)('node_modules/allience-common-proto/proto/', `${packageName}.proto`),
        },
    };
};
exports.generateGRPCServer = generateGRPCServer;
const generateGRPCClient = (serviceName, packageName, port, hostname = 'localhost') => {
    return Object.assign({ name: serviceName }, (0, exports.generateGRPCServer)(packageName, port, hostname));
};
exports.generateGRPCClient = generateGRPCClient;
//# sourceMappingURL=generate.grpc.js.map