"use client";

import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme: toggleTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDarkMode = theme === "dark";

  const toggleThemeMode = () => toggleTheme(isDarkMode ? "light" : "dark");

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={isDarkMode}
      size="sm"
      color="default"
      startContent={<Sun />}
      endContent={<Moon />}
      onChange={toggleThemeMode}
    />
  );
};
