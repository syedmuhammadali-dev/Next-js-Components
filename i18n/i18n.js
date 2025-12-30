import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./english.json";
import ar from "./arabic.json";
import he from "./hebrew.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    he: { translation: he },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Imported in src/main.jsx, src/components/dashboard_components/Dashboard/Topbar.jsx
export default i18n;
