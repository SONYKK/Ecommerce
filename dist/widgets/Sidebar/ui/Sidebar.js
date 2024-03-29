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
import { classNames } from "../../../shared/lib/classNames/classNames";
import { useState } from 'react';
import { ThemeSwitcher } from "../../ThemeSwitcher";
import { LangSwitcher } from "../../LangSwitcher/LangSwitcher";
import { Button } from "../../../shared/ui/Button/Button";
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var t = useTranslation().t;
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", onClick: function () {
                    setCollapsed(function (prev) { return !prev; });
                } }, { children: t('Set collapsed') }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, { className: "svg" }, void 0), _jsx(LangSwitcher, { className: cls.lang }, void 0)] }), void 0)] }), void 0));
};
