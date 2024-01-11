"use client";

import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true));

  function setThemeMode(value) {
    if (value) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <>
      <Switch
        defaultSelected={false}
        size="sm"
        color="default"
        startContent={<Sun />}
        endContent={<Moon />}
        onChange={(e) => setThemeMode(e.target.checked)}
      >
        <span className="text-sm">{mounted && theme}</span>
      </Switch>
    </>
  );
};
