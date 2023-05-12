import { AuthGuard } from '@nestjs/passport';

export const GUARD_TOKEN_JWT = 'jwt';

export class JwtGuard extends AuthGuard(GUARD_TOKEN_JWT) {}
