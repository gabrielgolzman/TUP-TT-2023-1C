import { createContext, useState } from "react";

export const TranslationContext = createContext();

const tValue = localStorage.getItem("translation");

export const TranslationContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(tValue ?? "en");

  const changeLanguage = (newLanguage) => {
    localStorage.setItem("translation", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
