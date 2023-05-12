"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18_RESOLVER = void 0;
const nestjs_i18n_1 = require("nestjs-i18n");
exports.I18_RESOLVER = [
    new nestjs_i18n_1.QueryResolver(['lang', 'l']),
    new nestjs_i18n_1.HeaderResolver(['x-custom-lang']),
    new nestjs_i18n_1.CookieResolver(),
    nestjs_i18n_1.AcceptLanguageResolver,
];
//# sourceMappingURL=i18-resolver.js.map