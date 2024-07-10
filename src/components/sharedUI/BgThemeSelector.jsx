import { useState, useEffect, useRef } from 'react';
import { useBgTheme } from '../hooks/useBgTheme';

const themeColors = ['#94A3B8', '#A78BFA', '#FDE68A', '#FFF'];

export default function BgThemeSelector() {
  const { changeBgTheme } = useBgTheme();
  const [currentTheme, setCurrentTheme] = useState(themeColors[0]);

  const changeBgThemeRef = useRef(changeBgTheme);

  // Effect to change the background theme when currentTheme changes
  useEffect(() => {
    changeBgThemeRef.current(currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * themeColors.length);
      setCurrentTheme(themeColors[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 justify-center mt-10 relative z-10">
      {themeColors.map((theme) => (
        <button
          key={theme}
          
          onClick={() => setCurrentTheme(theme)}
          className={`p-2 text-white size-6 rounded-full border-2 ${theme} ${currentTheme === theme ? 'border-purple-600' : 'border-slate-300'}`}
          style={{ backgroundColor: theme }}
        />
      ))}
    </div>
  );
}
