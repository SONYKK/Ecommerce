import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { DeliveryPage } from 'pages/DeliveryPage';
import { CooperationPage } from 'pages/CooperationPage';
import { KontaktPage } from 'pages/KontaktPage';
import { CatalogPage } from 'pages/CatalogPage';
import { ItemDetailPage } from 'pages/ItemDetailPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    DELIVERY = 'delivery',
    COOPERATION = 'cooperation',
    KONTAKT = 'kontakt',
    CATALOG = 'catalog',
    ITEM_DETAIL = 'item_detail',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.DELIVERY]: '/delivery',
    [AppRoutes.COOPERATION]: '/cooperation',
    [AppRoutes.KONTAKT]: '/kontakt',
    [AppRoutes.CATALOG]: '/catalog',
    [AppRoutes.ITEM_DETAIL]: '/catalog/', // + :id
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.DELIVERY]: {
        path: RoutePath.delivery,
        element: <DeliveryPage />,
    },
    [AppRoutes.COOPERATION]: {
        path: RoutePath.cooperation,
        element: <CooperationPage />,
    },
    [AppRoutes.KONTAKT]: {
        path: RoutePath.kontakt,
        element: <KontaktPage />,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    [AppRoutes.ITEM_DETAIL]: {
        path: `${RoutePath.item_detail}:id`,
        element: <ItemDetailPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },

};
