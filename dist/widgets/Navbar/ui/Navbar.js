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
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from "../../../shared/ui/Button/Button";
import { LoginModal } from "../../../features/AuthByUsername";
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from "../../../entities/User";
import { Text, TextTheme } from "../../../shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "../../../shared/ui/AppLink/AppLink";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig";
import cls from './Navbar.module.scss';
import Icon from "../../../shared/assets/icons/logo.svg";
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    if (authData) {
        return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: ["//", _jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onLogout }, { children: t('Выйти') }), void 0)] }), void 0));
    }
    return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Icon, {}, void 0), _jsx(Text, { className: cls.appName, title: t('Rodonit Group'), theme: TextTheme.INVERTED }, void 0), _jsx(AppLink, __assign({ to: RoutePath.about, theme: AppLinkTheme.SECONDARY, className: cls.links }, { children: t('О компании') }), void 0), _jsx(AppLink, __assign({ to: RoutePath.delivery, theme: AppLinkTheme.SECONDARY, className: cls.links }, { children: t('Доставка и оплата') }), void 0), _jsx(AppLink, __assign({ to: RoutePath.cooperation, theme: AppLinkTheme.SECONDARY, className: cls.links }, { children: t('Сотрудничество') }), void 0), _jsx(AppLink, __assign({ to: RoutePath.kontakt, theme: AppLinkTheme.SECONDARY, className: cls.links }, { children: t('Контакты') }), void 0), _jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onShowModal }, { children: t('Войти') }), void 0), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: onCloseModal }, void 0))] }), void 0));
});
