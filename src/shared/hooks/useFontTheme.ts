import { useEffect, useState } from 'react';

export type FontThemeType = 'serif' | 'sans' | 'mono';

function detectSystemDefault(): FontThemeType {
  // Simple heuristic – you can refine this
  const platform = window.navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'sans';
  if (platform.includes('mac')) return 'sans';
  if (platform.includes('linux')) return 'mono'; // optional choice
  return 'sans';
}

function getPreferredFontTheme(): FontThemeType {
  const saved = localStorage.getItem('fontTheme');
  if (saved === 'serif' || saved === 'sans' || saved === 'mono') {
    return saved;
  }
  return detectSystemDefault();
}

export default function useFontTheme() {
  const [fontTheme, setFontTheme] = useState<FontThemeType>(
    getPreferredFontTheme,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-sans', 'font-serif', 'font-mono');
    root.classList.add(`font-${fontTheme}`);

    localStorage.setItem('fontTheme', fontTheme);
  }, [fontTheme]);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'fontTheme' && e.newValue) {
        if (
          e.newValue === 'serif' ||
          e.newValue === 'sans' ||
          e.newValue === 'mono'
        ) {
          setFontTheme(e.newValue);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return [fontTheme, setFontTheme] as const;
}
