import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
var CatalogPage = function () {
    var t = useTranslation('catalog').t;
    return (_jsx("div", { children: t('Каталог') }, void 0));
};
export default CatalogPage;
