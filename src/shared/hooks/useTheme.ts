import { useEffect, useState } from 'react';

export type ColorThemeType = 'light' | 'dark' | 'system';

function getPreferredTheme(): ColorThemeType {
  const saved = localStorage.getItem('colorTheme') as ColorThemeType | null;
  if (saved) return saved;

  // default: follow system
  return 'system';
}

export default function useTheme() {
  const [theme, setTheme] = useState<ColorThemeType>(getPreferredTheme);

  // keep DOM + storage in sync
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (mode: ColorThemeType) => {
      if (mode === 'dark') {
        root.classList.add('dark');
      } else if (mode === 'light') {
        root.classList.remove('dark');
      } else if (mode === 'system') {
        // Check system preference
        const systemDark = window.matchMedia(
          '(prefers-color-scheme: dark)',
        ).matches;
        root.classList.toggle('dark', systemDark);
      }
    };

    applyTheme(theme);
    localStorage.setItem('colorTheme', theme);

    // If user selected "system", keep watching
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => {
        root.classList.toggle('dark', e.matches);
      };
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, [theme]);

  return [theme, setTheme] as const;
}
