import { AcceptLanguageResolver, CookieResolver, HeaderResolver, QueryResolver } from 'nestjs-i18n';

export const I18_RESOLVER = [
    new QueryResolver(['lang', 'l']),
    new HeaderResolver(['x-custom-lang']),
    new CookieResolver(),
    AcceptLanguageResolver,
];
