import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {HTMLAttributeAnchorTarget, memo} from 'react';
import {Text, TextAlign} from 'shared/ui/Text/Text';
import {Card} from 'shared/ui/Card/Card';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import cls from './CatalogItemListItem.module.scss';
import {CatalogItem, CatalogItemView} from "entities/CatalogItem/model/types/CatalogItemSchema";

interface CatalogItemListItemProps {
    className?: string;
    catalogItem: CatalogItem;
    view: CatalogItemView;
    target?: HTMLAttributeAnchorTarget;
}

export const CatalogItemListItem = memo((props: CatalogItemListItemProps) => {
    const {
        className, catalogItem, view, target,
    } = props;
    const { t } = useTranslation();

    if (view === CatalogItemView.BIG) {
        
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Text title={catalogItem.name} className={cls.title} />
                <img src={catalogItem.img} className={cls.img} alt={catalogItem.name} />
    
                
                
                <div className={cls.footer}>
                    <AppLink
                        target={target}
                        to={RoutePath.item_detail + catalogItem.id}
                    >
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('Подробнее...')}
                        </Button>
                    </AppLink>
                </div>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.item_detail + catalogItem.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={catalogItem.name} src={catalogItem.img} className={cls.img} />
                    <Text text={String(catalogItem.price)} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                </div>
                <Text text={catalogItem.name} className={cls.title} />
    
                <Text text={catalogItem.description}/>
                <Text text={String(catalogItem.price)} align={TextAlign.RIGHT}/>
            </Card>
        </AppLink>
    );
});
