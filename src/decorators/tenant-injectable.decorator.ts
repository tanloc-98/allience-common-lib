/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { applyDecorators, Injectable, Scope } from '@nestjs/common';

export const TenantRequest = () => applyDecorators(Injectable({ scope: Scope.REQUEST }));
