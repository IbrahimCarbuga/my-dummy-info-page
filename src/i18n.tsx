import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    tr: {
      translations: {
       Home: "Anasayfa",
       HomeLabel: "Merhaba. Ben Anasayfayım",
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
       FooterMessage: "Tüm hakları saklıdır..",
       ContactUsPage: "İletişim",
       Logout: "Çıkış"
      }
    },
    en: {
      translations: {
       Home: "Home",
       HomeLabel: "Hello. I'm Home Page",
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
       FooterMessage: "All rights reserved..",
       ContactUsPage: "Contact Us",
       Logout: "Logout"
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
