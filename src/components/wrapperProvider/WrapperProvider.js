import React from "react";

import { AuthenticationContextProvider } from "../services/authentication/authentication.context";
import { ThemeContextProvider } from "../services/theme/theme.context";
import { APIContextProvider } from "../services/api/api.context";
import { TranslationContextProvider } from "../services/translation/translation.context";

const WrapperProvider = ({ children }) => {
  return (
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <APIContextProvider>
          <TranslationContextProvider>{children}</TranslationContextProvider>
        </APIContextProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  );
};

export default WrapperProvider;
