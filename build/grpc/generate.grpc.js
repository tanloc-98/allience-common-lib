"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGRPCClient = exports.generateGRPCServer = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const generateGRPCServer = (packageName, dir, port, hostname = 'localhost') => {
    return {
        transport: microservices_1.Transport.GRPC,
        options: {
            url: `${hostname}:${port}`,
            package: packageName,
            protoPath: (0, path_1.join)(dir, '..', `${packageName}/${packageName}.proto`),
        },
    };
};
exports.generateGRPCServer = generateGRPCServer;
const generateGRPCClient = (serviceName, packageName, dir, port, hostname = 'localhost') => {
    return Object.assign({ name: serviceName }, (0, exports.generateGRPCServer)(packageName, dir, port, hostname));
};
exports.generateGRPCClient = generateGRPCClient;
//# sourceMappingURL=generate.grpc.js.map