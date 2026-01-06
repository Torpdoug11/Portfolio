export type DesignMode = 'neo-cyber' | 'modern-website' | 'minimal-luxury';

export interface ThemeContextType {
  darkMode: boolean;
  designMode: DesignMode;
  toggleDarkMode: () => void;
  setDesignMode: (mode: DesignMode) => void;
}
