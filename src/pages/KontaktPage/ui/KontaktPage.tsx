import React from 'react';
import { useTranslation } from 'react-i18next';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import cls from './KontaktPage.module.scss'
import {Page} from "widgets/Page/Page";

const KontaktPage = () => {
    const { t } = useTranslation('kontakt');
    
    const defaultState = {
        center: [55.825350, 37.514365],
        zoom: 16,
    }
    
    return (
        <Page>
            <h2 className={cls.kontakts}>{t('Наш офис на карте')}</h2>
            <YMaps>
                <Map defaultState={defaultState}>
                    <Placemark geometry={[55.825350, 37.514365]} />
                </Map>
            </YMaps>
            <h3 >
                {t('Контактная информация')}
            </h3>
            <p>
                {t('Телефон: +7 (499) 707 14 20')}
            </p>
            <p>
                email: info@rodonit.group
            </p>
            <h3 >
                {t('Реквизиты')}
            </h3>
            
            <p>    ОГРН 5177746181377 </p>
            <p>    ИНН 7743232491 </p>
            <p>    КПП 774301001 </p>
            <p>    ОКПО 20132867 </p>
            
        </Page>
    );
};

export default KontaktPage;
