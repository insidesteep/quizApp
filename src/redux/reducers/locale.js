import { CHANGE_LOCALE } from "../constants/locale";
import { LOCALE_CONFIG } from "../../configs/AppConfig";

const initLocale = {
  ...LOCALE_CONFIG,
};

const locale = (state = initLocale, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      localStorage.setItem("locale", action.locale);

      return {
        ...state,
        localeValue: action.locale,
      };

    default:
      return state;
  }
};

export default locale;
