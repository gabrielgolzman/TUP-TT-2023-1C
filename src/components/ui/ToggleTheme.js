import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../services/theme/theme.context";
import useTranslate from "../custom/translations/useTranslate";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const translate = useTranslate();
  return (
    <Button
      onClick={toggleTheme}
      className="mt-4"
      variant={theme === "light" ? "dark" : "light"}
    >
      {translate(
        theme === "light" ? "dark_theme_change" : "light_theme_change"
      )}
    </Button>
  );
};

export default ToggleTheme;
