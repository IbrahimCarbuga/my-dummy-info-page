import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    tr: {
      translations: {
       Home: "Ana Sayfa",
       Name: "İsim",
       Email: "Email Adresi",
       PhoneNumber: "Telefon Numarası",
       TextField: "Açıklama",
       Country: "Ülke",
       Send: "Gönder",
       LoginModal: "Giriş Sayfası",
       Password: "Şifre",
       Close: "Kapat",
       Login: "Giriş",
       FooterMessage: "Tüm hakları saklıdır.."
      }
    },
    en: {
      translations: {
       Home: "Home Page",
       Name: "Name",
       Email: "Email Address",
       PhoneNumber: "Phone Number",
       TextField: "Description",
       Country: "Country",
       Send: "Send",
       LoginModal: "Login Modal",
       Password: "Password",
       Close: "Close",
       Login: "Login",
       FooterMessage: "All rights reserved.."
      }
    },
  },
  fallbackLng: "tr",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, 

  interpolation: {
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
