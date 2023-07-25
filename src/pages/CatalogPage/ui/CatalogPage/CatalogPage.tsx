import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './CatalogPage.module.scss';
import {memo, useCallback, useEffect} from 'react';
import {CatalogItemList} from "entities/CatalogItem/ui/CatalogItemList/CatalogItemList";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {Page} from "widgets/Page/Page";
import {CatalogPageReducer, getCatalogItems} from "pages/CatalogPage/model/slices/CatalogPageSlice";
import {
    getCatalogPageError,
    getCatalogPageIsLoading,
    getCatalogPageView
} from "../../model/selectors/catalogPageSelectors";
import {fetchCatalogItemById} from "entities/CatalogItem/model/services/fetchCatalogItemById/fetchCatalogItemById";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchCatalogPage} from "pages/CatalogPage/model/services/fetchCatalogPage";


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
    const { id } = useParams<{id:string}>()
    const isLoading = useSelector(getCatalogPageIsLoading);
    const view = useSelector(getCatalogPageView);
    const [searchParams] = useSearchParams();
    
  
    // const onLoadNextPart = useCallback(() => {
    //     dispatch(fetchNextArticlesPage());
    // }, [dispatch]);
    //
    useInitialEffect(() => {
        dispatch(fetchCatalogPage('1'));
    });
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                // onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                {console.log(catalog)}
                <CatalogItemList
                    isLoading={isLoading}
                    // view={view}
                    catalogItem={catalog}
                    className={cls.list}
                    target={"_blank"}
                    
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(CatalogPage);