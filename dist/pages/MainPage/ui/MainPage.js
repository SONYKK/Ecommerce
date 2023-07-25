import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Page } from "../../../widgets/Page/Page";
import MainImg from '../../../shared/assets/icons/cloud-storage-background-remixed-from-public-domain-by-nasa.jpg';
import { Text } from '../../../shared/ui/Text/Text';
var MainPage = function () {
    var t = useTranslation().t;
    var textMain = 'Компания Rodonit, является партнером мировых производителей телекоммуникационных, сетевых и серверных решений, и приглашает Вас стать нашими партнерами. В нашем активе партнерские отношения с ведущими компаниями такими как Supermicro, Intel , Cisco, HP, Dell , Lenovo, Axis, PNY, Matrox и многие другие фирмы производители. Мы готовы поставить практически любое компьютерное оборудование в том числе редкое и снятое с производства для построения ЛВС, ЦОД, серверных комнат и датацентров, организации IP телефонии и видеоконференцсвязи.';
    return (_jsx(_Fragment, { children: _jsxs(Page, { children: [t('Главная страница'), _jsx("img", { src: MainImg, alt: 'some img', width: '90%' }, void 0), _jsx(Text, { text: textMain }, void 0)] }, void 0) }, void 0));
};
export default MainPage;
