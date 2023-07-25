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
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from "../../../../shared/ui/ThemeSwitcher";
import { LangSwitcher } from "../../../../shared/ui/LangSwitcher/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { useSelector } from 'react-redux';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
export var Sidebar = memo(function (_a) {
    var _b, _c;
    var className = _a.className;
    var _d = useState(false), collapsed = _d[0], setCollapsed = _d[1];
    var sidebarItemsList = useSelector(getSidebarItems);
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var itemsList = useMemo(function () { return sidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [collapsed, sidebarItemsList]);
    var categoryList = useMemo(function () { return sidebarItemsList.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }); }, [collapsed, sidebarItemsList]);
    return (_jsxs("menu", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", onClick: onToggle, className: cls.collapseBtn, theme: ButtonTheme.BACKGROUND_INVERTED, size: ButtonSize.L, square: true }, { children: collapsed ? '>' : '<' }), void 0), _jsx("div", __assign({ className: cls.items }, { children: itemsList }), void 0), _jsxs("label", { children: [_jsx("div", __assign({ className: classNames(cls.items, (_c = {}, _c[cls.collapsed] = collapsed, _c)) }, { children: "\u0421\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B" /* SERVER */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u044B" /* MAPPERS */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F" /* STORAGE */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "IP \u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0438\u044F" /* IP */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435" /* COMPONENTS */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "\u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0438 LTO (\u043A\u0430\u0440\u0442\u0440\u0438\u0434\u0436\u0438)" /* CARTRIDGES */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "\u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0435 \u043D\u0430\u043A\u043E\u043F\u0438\u0442\u0435\u043B\u0438 LTO (\u0441\u0442\u0440\u0438\u043C\u0435\u0440\u044B)" /* STRIMERS */ }), void 0), _jsx("div", __assign({ className: cls.items }, { children: "\u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0435 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438" /* LIBS */ }), void 0)] }, void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LangSwitcher, { short: collapsed, className: cls.lang }, void 0)] }), void 0)] }), void 0));
});
