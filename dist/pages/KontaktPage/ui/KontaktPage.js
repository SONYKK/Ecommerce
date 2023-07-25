var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import cls from './KontaktPage.module.scss';
import { Page } from "../../../widgets/Page/Page";
var KontaktPage = function () {
    var t = useTranslation('kontakt').t;
    var defaultState = {
        center: [55.825350, 37.514365],
        zoom: 16,
    };
    return (_jsxs(Page, { children: [_jsx("h2", __assign({ className: cls.kontakts }, { children: t('Наш офис на карте') }), void 0), _jsx(YMaps, { children: _jsx(Map, __assign({ defaultState: defaultState }, { children: _jsx(Placemark, { geometry: [55.825350, 37.514365] }, void 0) }), void 0) }, void 0), _jsx("h3", { children: t('Контактная информация') }, void 0), _jsx("p", { children: t('Телефон: +7 (499) 707 14 20') }, void 0), _jsx("p", { children: "email: info@rodonit.group" }, void 0), _jsx("h3", { children: t('Реквизиты') }, void 0), _jsx("p", { children: "    \u041E\u0413\u0420\u041D 5177746181377 " }, void 0), _jsx("p", { children: "    \u0418\u041D\u041D 7743232491 " }, void 0), _jsx("p", { children: "    \u041A\u041F\u041F 774301001 " }, void 0), _jsx("p", { children: "    \u041E\u041A\u041F\u041E 20132867 " }, void 0)] }, void 0));
};
export default KontaktPage;
