import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './DeliveryPage.module.scss';

const DeliveryPage = () => {
    const { t } = useTranslation('delivery');

    return (
        <Page>
            <h2>{t('Доставка и оплата')}</h2>
            <ol>
                <li>
                    {t('Наличный расчет.\n'
                        // eslint-disable-next-line max-len
                        + 'Для физических и юридических лиц, желающих приобрести товар за наличные в Москве - Вы можете оплатить заказ нашему курьеру при получении. Вместе с заказом Вы получаете накладную и приходно кассовый ордер.')}
                </li>
                <li>
                    {t('Безналичный расчет.\n'
                        // eslint-disable-next-line max-len
                        + 'Для юридических лиц, желающих приобрести товар безналичным переводом - после оформления заказа будет сформирован счёт на оплату и отправлен Вам по электронной почте. Вместе с заказом при получении будут переданы все необходимые для бухгалтерии документы (оригинал счёта, товарная накладная, счёт-фактура или УПД - универсальный передаточный документ).')}
                </li>
            </ol>
        </Page>
    );
};

export default DeliveryPage;
