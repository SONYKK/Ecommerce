var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from "../../../pages/MainPage";
import { AboutPage } from "../../../pages/AboutPage";
import { NotFoundPage } from "../../../pages/NotFoundPage";
import { ProfilePage } from "../../../pages/ProfilePage";
import { ArticlesPage } from "../../../pages/ArticlesPage";
import { ArticleDetailsPage } from "../../../pages/ArticleDetailsPage";
import { ArticleEditPage } from "../../../pages/ArticleEditPage";
import { DeliveryPage } from "../../../pages/DeliveryPage";
import { CooperationPage } from "../../../pages/CooperationPage";
import { KontaktPage } from "../../../pages/KontaktPage";
import { CatalogPage } from "../../../pages/CatalogPage";
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
    AppRoutes["ARTICLE_CREATE"] = "article_create";
    AppRoutes["ARTICLE_EDIT"] = "article_edit";
    AppRoutes["DELIVERY"] = "delivery";
    AppRoutes["COOPERATION"] = "cooperation";
    AppRoutes["KONTAKT"] = "kontakt";
    AppRoutes["CATALOG"] = "catalog";
    // last
    AppRoutes["NOT_FOUND"] = "not_found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILS] = '/articles/',
    _a[AppRoutes.ARTICLE_CREATE] = '/articles/new',
    _a[AppRoutes.ARTICLE_EDIT] = '/articles/:id/edit',
    _a[AppRoutes.DELIVERY] = '/delivery',
    _a[AppRoutes.COOPERATION] = '/cooperation',
    _a[AppRoutes.KONTAKT] = '/kontakt',
    _a[AppRoutes.CATALOG] = '/catalog',
    // последний
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRoutes.PROFILE] = {
        path: "".concat(RoutePath.profile, ":id"),
        element: _jsx(ProfilePage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlesPage, {}, void 0),
    },
    _b[AppRoutes.ARTICLE_DETAILS] = {
        path: "".concat(RoutePath.article_details, ":id"),
        element: _jsx(ArticleDetailsPage, {}, void 0),
    },
    _b[AppRoutes.ARTICLE_CREATE] = {
        path: "".concat(RoutePath.article_create),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_EDIT] = {
        path: "".concat(RoutePath.article_edit),
        element: _jsx(ArticleEditPage, {}, void 0),
        authOnly: true,
    },
    _b[AppRoutes.DELIVERY] = {
        path: RoutePath.delivery,
        element: _jsx(DeliveryPage, {}, void 0),
    },
    _b[AppRoutes.COOPERATION] = {
        path: RoutePath.cooperation,
        element: _jsx(CooperationPage, {}, void 0),
    },
    _b[AppRoutes.KONTAKT] = {
        path: RoutePath.kontakt,
        element: _jsx(KontaktPage, {}, void 0),
    },
    _b[AppRoutes.CATALOG] = {
        path: RoutePath.catalog,
        element: _jsx(CatalogPage, {}, void 0),
    },
    // last
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b);
