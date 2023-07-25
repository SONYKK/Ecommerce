import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import imageIcon from "../../../shared/assets/icons/funny-cooperation.jpg";
import { Page } from "../../../widgets/Page/Page";
var CooperationPage = function () {
    var t = useTranslation('cooperation').t;
    return (_jsxs(Page, { children: [_jsx("h2", { children: t('Сотрудничество') }, void 0), _jsx("img", { src: imageIcon, width: '800px' }, void 0), _jsx("h3", { children: "Some text about cooperation here" }, void 0)] }, void 0));
};
export default CooperationPage;
