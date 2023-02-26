import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { landingPageTranslations } from "./helpers/translations/landingPageTranslations";
import { hormonanalysisTranslations } from "./helpers/translations/hormonanalysisTranslations";
import { navbarTranslations } from "./helpers/translations/navbarTranslations";
import { staffPageTranslations } from "./helpers/translations/staffPageTranslations";
import { boardPageTranslations } from "./helpers/translations/boardPageTranslations";
import { footerTranslations } from "./helpers/translations/footerTranslations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "sv",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          //landing-page content
          ...landingPageTranslations,
          ...hormonanalysisTranslations,
          ...navbarTranslations,
          ...footerTranslations,

          //single-pages content /staff
          ...staffPageTranslations,
          //single-pages content /board
          ...boardPageTranslations,
        },
      },
    },
  });

export default i18n;
