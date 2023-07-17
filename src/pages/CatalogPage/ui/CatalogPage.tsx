import React from 'react';
import { useTranslation } from 'react-i18next';

const CatalogPage = () => {
    const { t } = useTranslation('catalog');
    
    return (
        <div>
            {t('Каталог')}
        </div>
    );
};

export default CatalogPage;