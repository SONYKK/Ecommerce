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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../lib/classNames/classNames";
import { memo } from 'react';
import { Theme, useTheme } from "../../../../app/providers/ThemeProvider";
import LightIcon from "../../../assets/icons/theme-light.svg";
import DarkIcon from "../../../assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "../../Button/Button";
export var ThemeSwitcher = memo(function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    return (_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, className: classNames('', {}, [className]), onClick: toggleTheme }, { children: theme === Theme.DARK ? _jsx(DarkIcon, {}, void 0) : _jsx(LightIcon, {}, void 0) }), void 0));
});
