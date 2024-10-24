import React from 'react'
import './ThemeToggle.css'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import withTheme from '../../theme/Theme'
function ThemeToggle({ theme, toggleTheme }) {
    return (
        <div>
            <input type="checkbox" className="checkbox" id="checkbox" checked={ theme.text === '#000' } style={ { backgroundColor: theme.text } } onChange={ toggleTheme } />
            <label htmlFor="checkbox" className="checkbox-label">
                <FaMoon className='fa-moon' />
                <FaSun className='fa-sun' />
                <span style={ { backgroundColor: theme.textSecondary } } className="ball"></span>
            </label>
        </div>
    )
}

export default withTheme(ThemeToggle)
