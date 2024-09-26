import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to wrap around your app
export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('dark');

    const toggleTheme = () => {
        setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={ { themeName, toggleTheme } }>
            { children }
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useThemeContext = () => {
    return useContext(ThemeContext);
};
