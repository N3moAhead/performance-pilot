import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import type { Theme, ThemeContext } from '@/types/Theme';

const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  toggle: () => {},
});

/**
 * Get the current theme
 */
const defaultValue = (): Theme => {
  if (typeof window !== 'undefined' && localStorage.theme === 'light') {
    return "light";
  }
  return "dark"
}

/**
 * A context to keep track of the current theme
 * the theme can be changed by calling the toggle method
 */
export const ThemeProvider = ({ children }: {children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>();

  const toggleTheme = () => setTheme((currentTheme) => {
    if (currentTheme) {
      return currentTheme === 'dark' ? 'light' : 'dark';
    }
  })

  /**
   * Im using the localStorage Object to get the lastConfiguration from
   * the user
   */
  useEffect(() => setTheme(defaultValue()), [])

  /** Every time the theme changes the root value has to be updated for tailwind */
  useEffect(() => {
    const oldTheme = theme === "dark" ? "light" : "dark";

    if (theme) {
      const root = window.document.documentElement;
  
      root.classList.remove(oldTheme);
      root.classList.add(theme);
  
      if (typeof window !== "undefined") {
        /** Im also setting the new theme in the localStorage object */
        localStorage.setItem("theme", theme);
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Hook for easy access to the themeContext 
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be called inside of a ThemeProvider');
  }
  return context;
}