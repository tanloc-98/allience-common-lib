/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const generateGRPCServer = (packageName: string, port: number, hostname = 'localhost') => {
    return {
        transport: Transport.GRPC,
        options: {
            url: `${hostname}:${port}`,
            package: packageName,
            protoPath: join('node_modules/allience-common-proto/proto/',`${packageName}.proto`),
        },
    } as GrpcOptions;
};

export const generateGRPCClient = (
    serviceName: string,
    packageName: string,
    port: number,
    hostname = 'localhost',
) => {
    return {
        name: serviceName,
        ...generateGRPCServer(packageName, port, hostname),
    } as GrpcOptions;
};
