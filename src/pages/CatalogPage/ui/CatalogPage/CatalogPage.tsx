import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { CatalogItemList } from 'entities/CatalogItem/ui/CatalogItemList/CatalogItemList';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { CatalogPageActions, CatalogPageReducer, getCatalogItems } from 'pages/CatalogPage/model/slices/CatalogPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { CatalogViewSelector } from 'features/CatalogViewSelector/CatalogViewSelector';
import { CatalogItemView } from 'entities/CatalogItem/model/types/CatalogItemSchema';
import { fetchCatalogPage } from '../../model/services/fetchCatalogPage';
import {
    getCatalogPageHasMore,
    getCatalogPageInited,
    getCatalogPageIsLoading,
    getCatalogPageNum,
    getCatalogPageView,
} from '../../model/selectors/catalogPageSelectors';
import cls from './CatalogPage.module.scss';

interface CatalogPageProps {
    className?: string;
}

const reducers: ReducersList = {
    catalogPage: CatalogPageReducer,
};

export const CatalogPage = memo((props: CatalogPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const catalog = useSelector(getCatalogItems.selectAll);
    const isLoading = useSelector(getCatalogPageIsLoading);
    const view = useSelector(getCatalogPageView);
    const [searchParams] = useSearchParams();
    const page = useSelector(getCatalogPageNum);
    const hasMore = useSelector(getCatalogPageHasMore);
    const inited = useSelector(getCatalogPageInited);

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(CatalogPageActions.setPage(page + 1));
            dispatch(fetchCatalogPage(String(page + 1)));
        }
    }, [dispatch, page, hasMore, isLoading]);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(CatalogPageActions.initState());
            dispatch(fetchCatalogPage('1'));
        }
    });
    const onChangeView = useCallback((view:CatalogItemView) => {
        dispatch(CatalogPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <CatalogViewSelector view={view} onViewClick={onChangeView} />
                <CatalogItemList
                    isLoading={isLoading}
                    view={view}
                    catalogItem={catalog}
                    className={cls.list}
                    target="_blank"

                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(CatalogPage);
