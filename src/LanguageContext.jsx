import React, { createContext, useState } from "react";

const LanguageContext = createContext();
const LanguageChangeContext = createContext();

export function useLanguage() {
  return React.useContext(LanguageContext);
}

export function useLanguageChange() {
  return React.useContext(LanguageChangeContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function changeLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageChangeContext.Provider value={changeLanguage}>
        {children}
      </LanguageChangeContext.Provider>
    </LanguageContext.Provider>
  );
}
