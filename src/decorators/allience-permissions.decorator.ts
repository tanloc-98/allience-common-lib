/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GUARD_TOKEN_JWT } from '../guards';
import { PermissionGuard } from '../guards/permission.guard';

export const HRM_PERMISSIONS_KEY = 'hrm-permissions';

export function MustPermissions(...permissions: any[]) {
    return applyDecorators(
        SetMetadata(HRM_PERMISSIONS_KEY, permissions),
        UseGuards(AuthGuard(GUARD_TOKEN_JWT), PermissionGuard),
    );
}
