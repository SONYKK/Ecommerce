import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCatalogItemById } from 'entities/CatalogItem/model/services/fetchCatalogItemById/fetchCatalogItemById';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Some from '../../../../shared/assets/icons/funny-cooperation.jpg';
import {
    getCatalogItemData,
    getCatalogItemError,
    getCatalogItemIsLoading,
} from '../../model/selectors/CatalogItem';
import { CatalogItemReducer } from '../../model/slices/CatalogItemSlice';
import cls from './CatalogItem.module.scss';

interface CatalogItemProps {
    className?: string;
    id: string
}

export const CatalogItem = memo((props: CatalogItemProps) => {
    const { className, id } = props;
    const { t } = useTranslation('catalogItem');
    const reducers: ReducersList = {
        catalogItem: CatalogItemReducer,
    };
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getCatalogItemIsLoading);
    const error = useSelector(getCatalogItemError);
    const catalogItem = useSelector(getCatalogItemData);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.catalog);
    }, [navigate]);

    useEffect(() => {
        dispatch(fetchCatalogItemById(id));
    }, [dispatch, id]);

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке товара.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList} title="Go back" />
                    {/* <Avatar */}
                    {/*    size={600} */}
                    {/*    // src={catalogItem?.img} */}
                    {/*    src={Some} */}
                    {/*    className={cls.image} */}
                    {/* /> */}
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                        src={Some}
                        className={cls.image}
                    />
                </div>

                <div className={cls.articleInfo}>
                    <Text
                        className={cls.title}
                        title={catalogItem?.name}
                        size={TextSize.M}
                    />
                    <Text text={catalogItem?.description} />
                    <Text text={`${catalogItem?.price} руб.`} size={TextSize.L} />
                </div>

            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.CatalogItem, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
