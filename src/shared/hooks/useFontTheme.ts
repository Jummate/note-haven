// import { useEffect, useState } from 'react';

// export type FontThemeType = 'serif' | 'sans' | 'mono';

// function getPreferredFontTheme(): FontThemeType {
//   const saved = localStorage.getItem('fontTheme') as FontThemeType | null;
//   if (saved) return saved;

//   // default: follow system
//   return 'sans';
// }

// export default function useFontTheme() {
//   const [fontTheme, setFontTheme] = useState<FontThemeType>(
//     getPreferredFontTheme,
//   );

//   // keep DOM + storage in sync
//   useEffect(() => {
//     const root = document.documentElement;

//     const applyTheme = (mode: FontThemeType) => {
//         root.classList.remove('font-sans', 'font-serif', 'font-mono');
//       if (mode === 'sans') {
//         root.classList.add('font-sans');
//       } else if (mode === 'serif') {
//         root.classList.add('font-serif');
//       } else if (mode === 'mono') {
//         root.classList.add('font-mono');
//       }
//     };

//     applyTheme(fontTheme);
//     localStorage.setItem('fontTheme', fontTheme);
//   }, [fontTheme]);

//   return [fontTheme, setFontTheme] as const;
// }

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
