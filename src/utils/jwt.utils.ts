import { StringUtils } from './string.utils';
export class JwtUtils {
    public static getTokenFromBearerAuthorization(authorization: string): string {
        if (!authorization || !authorization.trim().startsWith('Bearer ')) {
            throw Error(StringUtils.format('Value must be BearerAuthorization -> {}', authorization));
        }
        const split = authorization.trim().split(' ');
        const token = split[1];
        if (!token.startsWith('ey')) {
            throw Error(StringUtils.format('Value must be JWT Token  -> {}', token));
        }
        return token;
    }
}
