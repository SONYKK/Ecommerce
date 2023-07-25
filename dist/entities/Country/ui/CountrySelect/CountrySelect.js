import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useTranslation } from 'react-i18next';
import { Select } from "../../../../shared/ui/Select/Select";
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
var options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];
export var CountrySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(Select, { className: classNames('', {}, [className]), label: t('Укажите страну'), options: options, value: value, onChange: onChangeHandler, readonly: readonly }, void 0));
});
