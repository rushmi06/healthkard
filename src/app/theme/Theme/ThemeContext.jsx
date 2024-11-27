import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to wrap around your app
export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        localStorage.setItem('theme', themeName);
    }, [themeName]);

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
