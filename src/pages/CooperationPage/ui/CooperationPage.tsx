import React from 'react';
import { useTranslation } from 'react-i18next';
import imageIcon from "../../../shared/assets/icons/funny-cooperation.jpg"
import {Page} from "widgets/Page/Page";

const CooperationPage = () => {
    const { t } = useTranslation('cooperation');
    
    return (
        <Page>
            <h2>{t('Сотрудничество')}</h2>
            
            <img src={imageIcon} width='800px'/>
            <h3>Some text about cooperation here</h3>
        </Page>
    );
};

export default CooperationPage;