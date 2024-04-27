import { getI18nObjects, Translator } from "lowcoder-core";
import * as localeData from "./locales";
import { I18nObjects } from "./locales/types";
import { languagesMetadata } from "./languagesMeta";

const uiLanguage = localStorage.getItem('lowcoder_uiLanguage');

export const { trans, transToNode, language } = new Translator<typeof localeData.en>(
  localeData,
  REACT_APP_LANGUAGES,
  [uiLanguage || 'en']
);

export const i18nObjs = getI18nObjects<I18nObjects>(localeData, REACT_APP_LANGUAGES);

export const languageList = Object.keys(languagesMetadata).map(code => ({
  languageCode: code,
  languageName: languagesMetadata[code].languageName,
  flag: languagesMetadata[code].flag
}));