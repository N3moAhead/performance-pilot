export type Theme = 'dark' | 'light' | undefined;

export interface ThemeContext {
  /** Call this function to change the theme */
  toggle: () => void;
  /** Holds the current Theme */
  theme: Theme;
};