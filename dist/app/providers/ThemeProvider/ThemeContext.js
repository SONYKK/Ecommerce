import { createContext } from 'react';
export var THEME;
(function (THEME) {
    THEME["LIGHT"] = "light";
    THEME["DARK"] = "dark";
})(THEME || (THEME = {}));
export var ThemeContext = createContext({});
export var LOCAL_STORAGE_THEME_KEY = 'theme';
