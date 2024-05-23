import { useContext } from "react";
import { BgThemeContext } from "../context/BgThemeContext";

export const useBgTheme = () => {
  const context = useContext(BgThemeContext);

  if (context === undefined) {
    throw new Error("useBgTheme() must be used within a BgThemeProvider");
  }

  return context;
}
