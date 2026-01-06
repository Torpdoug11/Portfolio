import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeContextType, DesignMode } from './types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [designMode, setDesignMode] = useState<DesignMode>('modern-website');

  // Load theme preferences from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedDesignMode = localStorage.getItem('designMode') as DesignMode || 'modern-website';
    
    setDarkMode(savedDarkMode);
    setDesignMode(savedDesignMode);
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
    
    // Apply design mode class
    document.documentElement.setAttribute('data-theme', designMode);
    localStorage.setItem('designMode', designMode);
  }, [darkMode, designMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, designMode, toggleDarkMode, setDesignMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
