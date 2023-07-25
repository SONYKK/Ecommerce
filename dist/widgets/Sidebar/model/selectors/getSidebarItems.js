import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from "../../../../entities/User";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg";
import ProfileIcon from "../../../../shared/assets/icons/profile-20-20.svg";
import ListIcon from "../../../../shared/assets/icons/list-24-24.svg";
export var getSidebarItems = createSelector(getUserAuthData, function (userData) {
    var sidebarItemsList = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.catalog,
            Icon: ListIcon,
            text: 'Каталог',
        },
        {
            path: RoutePath.articles,
            Icon: ListIcon,
            text: 'Статьи',
        },
    ];
    if (userData) {
        sidebarItemsList.push({
            path: RoutePath.profile + userData.id,
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true,
        });
    }
    return sidebarItemsList;
});
