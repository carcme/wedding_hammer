import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "Multi-language app",
        label: "Select another language!",
        about: "About",
        home: "Home",
      },
    },
    de: {
      translation: {
        title: "Aplicación en varios idiomas",
        label: "Selecciona otro lenguaje!",
        about: "Sobre mí",
        home: "Inicio",
      },
    },
  },
});

export default i18n;
