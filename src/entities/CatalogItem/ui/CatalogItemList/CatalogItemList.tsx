import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CatalogItemListItem } from '../CatalogListItem/CatalogItemListItem';
import cls from './CatalogItemList.module.scss';
import {CatalogItem, CatalogItemView} from "entities/CatalogItem/model/types/CatalogItemSchema";
import {CatalogItemListItemSkeleton} from "entities/CatalogItem/ui/CatalogListItem/CatalogItemListItemSkeleton";


interface CatalogItemListProps {
    className?: string;
    catalogItem: CatalogItem[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: CatalogItemView;
}

const getSkeletons = (view: CatalogItemView) => new Array(view === CatalogItemView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <CatalogItemListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const CatalogItemList = memo((props: CatalogItemListProps) => {
    const {
        className,
        catalogItem,
        view = CatalogItemView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    const renderCatalogItemList = (catalogItem: CatalogItem) => (
        <CatalogItemListItem
            catalogItem={catalogItem}
            view={view}
            className={cls.card}
            key={catalogItem.id}
            target={target}
        />
    );

    if (!isLoading && !catalogItem.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {catalogItem.length > 0
                ? catalogItem.map(renderCatalogItemList)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
