import { createContext, useContext, useState, useEffect } from "react";
import bn from "../locales/bn";
import en from "../locales/en";

const LanguageContext = createContext();

const translations = { bn, en };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("dgps-language");
    return saved || "bn";
  });

  useEffect(() => {
    localStorage.setItem("dgps-language", language);
    document.documentElement.lang = language === "bn" ? "bn" : "en";
  }, [language]);

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];
    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "bn" ? "en" : "bn"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
