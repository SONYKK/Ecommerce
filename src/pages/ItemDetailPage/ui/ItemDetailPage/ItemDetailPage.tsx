import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ItemDetailPage.module.scss';
import { memo } from 'react';
import {CatalogItem} from "entities/CatalogItem";
import {useParams} from "react-router-dom";

interface ItemDetailPageProps {
    className?: string;
}

const ItemDetailPage = memo((props: ItemDetailPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>()
    
    if(!id) {
        return <div className={classNames(cls.ItemDetailPage, {}, [className])}>
            {t('Товар не найден')}
        </div>
    }
    
    return (
        <div className={classNames(cls.ItemDetailPage, {}, [className])}>
           <CatalogItem id={id}/>
        </div>
    );
});

export default ItemDetailPage;