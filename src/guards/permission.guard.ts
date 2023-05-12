/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HRM_PERMISSIONS_KEY } from '../decorators';

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.getAllAndOverride<any[]>(HRM_PERMISSIONS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredPermissions) {
            return false;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredPermissions.some(permission => user[HRM_PERMISSIONS_KEY].includes(permission));
    }
}
