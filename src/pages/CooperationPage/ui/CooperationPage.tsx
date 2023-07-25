import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import imageIcon from '../../../shared/assets/icons/funny-cooperation.jpg';

const CooperationPage = () => {
    const { t } = useTranslation('cooperation');

    return (
        <Page>
            <h2>{t('Сотрудничество')}</h2>

            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={imageIcon} width="800px" />
            <h3>Some text about cooperation here</h3>
        </Page>
    );
};

export default CooperationPage;
