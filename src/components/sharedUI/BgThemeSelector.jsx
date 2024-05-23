import { useBgTheme } from '../hooks/useBgTheme';

const themeColors = ['#94A3B8', '#BEF264', '#A78BFA', '#F472B6', '#FDE68A', '#FFF'];

export default function BgThemeSelector() {
  const { changeBgTheme } = useBgTheme();

  return (
    <div className="flex gap-2 justify-center mt-10 relative z-10">
      {themeColors.map((theme) => (
        <button
          key={theme}
          onClick={() => changeBgTheme(theme)}
          className={`p-2 text-white size-6 rounded-full border-2 border-slate-200 ${theme}`}
          style={{ backgroundColor: theme }}
        />
      ))}
    </div>
  );
}
