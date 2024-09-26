import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './ThemeContext';
import { theme } from '../colors';

// Create the Theme HOC
const withTheme = (WrappedComponent) => {
    return function WithTheme(props) {
        const { themeName, toggleTheme } = useThemeContext();
        const currentTheme = theme[themeName];
        return (
            <ThemeProvider theme={ currentTheme }>
                <WrappedComponent { ...props } theme={ currentTheme.colors } toggleTheme={ toggleTheme } />
            </ThemeProvider>
        );
    };
};

export default withTheme;
