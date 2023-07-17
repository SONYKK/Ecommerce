import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import { SidebarItemType } from '../types/sidebar';


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
            
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },

            );
        }

        return sidebarItemsList;
    },
);
