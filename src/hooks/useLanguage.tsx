// import { useEffect } from "react";
// import { initReactI18next } from "react-i18next";
// import i18next from "i18next";
// import Backend from "i18next-http-backend";

// export function useLanguage() {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const browserLang = navigator.language || navigator.userLanguage;
//       const chosenLanguage = window.localStorage.getItem("chosenUserLanguage");
//       const localStorageLanguage =
//         window.localStorage.getItem("chosenUserLanguage");
//       const storedDefaultLanguage =
//         window.localStorage.getItem("defaultLanguage");
//       const defaultLanguage =
//         browserLang === "pl" || browserLang === "en" || browserLang === "de"
//           ? browserLang
//           : "pl";
//       const availableLanguages = {
//         pl: { label: "Polski (PL)", value: "pl" },
//         en: { label: "English (EN)", value: "en" },
//       };

//       const getDefaultLanguage = () => {
//         if (typeof Storage !== "undefined") {
//           const defaultLang = window.localStorage.getItem("defaultLanguage");
//           if (defaultLang !== null) {
//             try {
//               JSON.parse(defaultLang);
//               return JSON.parse(defaultLang);
//             } catch (e) {
//               return false;
//             }
//           }
//         }
//         return false;
//       };

//       if (!window.localStorage.getItem("availableLanguages")) {
//         window.localStorage.setItem(
//           "availableLanguages",
//           JSON.stringify(availableLanguages)
//         );
//       }

//       if (!storedDefaultLanguage) {
//         window.localStorage.setItem("defaultLanguage", defaultLanguage);
//       }

//       if (
//         !localStorageLanguage ||
//         (localStorageLanguage && !availableLanguages[localStorageLanguage])
//       ) {
//         if (browserLang && availableLanguages[browserLang.substring(0, 2)]) {
//           window.localStorage.setItem(
//             "chosenUserLanguage",
//             browserLang.substring(0, 2)
//           );
//         }
//       }

//       i18next
//         .use(Backend)
//         .use(initReactI18next)
//         .init({
//           lng: chosenLanguage ?? defaultLanguage,
//           fallbackLng: () => getDefaultLanguage(),
//           interpolation: {
//             escapeValue: false,
//           },
//           backend: {
//             // loadPath: (language) => `/labels_${language}`,
//             loadPath: (language) => `/${language}.json`,
//           },
//         });
//     }
//   }, []);
// }
