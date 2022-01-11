import { CHANGE_LOCALE } from "../constants/locale";



export function onLocaleChange(locale) {
  return {
    type: CHANGE_LOCALE,
    locale,
  };
}

