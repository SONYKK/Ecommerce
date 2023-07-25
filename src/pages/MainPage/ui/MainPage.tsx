import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import MainImg from '../../../shared/assets/icons/cloud-storage-background-remixed-from-public-domain-by-nasa.jpg';
import { Text } from '../../../shared/ui/Text/Text';
import cls from './MainPage.scss';

const MainPage = () => {
    const { t } = useTranslation();
    // eslint-disable-next-line max-len
    const textMain = 'Компания Rodonit, является партнером мировых производителей телекоммуникационных, сетевых и серверных решений, и приглашает Вас стать нашими партнерами. В нашем активе партнерские отношения с ведущими компаниями такими как Supermicro, Intel , Cisco, HP, Dell , Lenovo, Axis, PNY, Matrox и многие другие фирмы производители. Мы готовы поставить практически любое компьютерное оборудование в том числе редкое и снятое с производства для построения ЛВС, ЦОД, серверных комнат и датацентров, организации IP телефонии и видеоконференцсвязи.';

    return (
        <Page>
            {t('Главная страница')}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <img src={MainImg} alt="some img" width="90%" />
            <Text text={textMain} />
        </Page>
    );
};

export default MainPage;
