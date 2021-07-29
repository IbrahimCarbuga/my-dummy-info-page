import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    tr: {
      translations: {
       Home: "Ana Sayfa"
      }
    },
    en: {
      translations: {
       Home: "Home Page"
      }
    },
  },
  fallbackLng: "tr",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
