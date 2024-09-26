import React from 'react'
import { NAVIGATION_PANEL_LINKS } from './constants'
import './style.css'
import { NavLink } from 'react-router-dom'
import withTheme from '../../../../theme/Theme'
function NavigationPanel({ theme, toggleTheme }) {
    return (
        <div style={ { backgroundColor: theme.secondary } } id='navigation-panel' className='h-fit rounded flex flex-col gap-1 p-2'>
            { NAVIGATION_PANEL_LINKS.map((link) => (
                <div key={ link.label } className='flex flex-col gap-1 p-1'>
                    <div style={ { color: theme.tertiary } } className='flex flex-col gap-4 text-white text-xs'>
                        { link.label }
                    </div>
                    { link.subLinks.map((subLink) => {
                        const isTheme = subLink.label === 'Theme'
                        return isTheme ? (
                            <button type='button' onClick={ toggleTheme } key={ subLink.label } style={ { color: theme.primary } } className='flex flex-col gap-1'>
                                <div className='text-sm font-medium h-9 w-48 flex items-center gap-1.5 px-2 py-1 rounded'>
                                    <subLink.icon />
                                    { subLink.label }
                                </div>
                            </button>
                        ) : (
                            <NavLink
                                to={ subLink.link }
                                key={ subLink.label }
                                style={ { color: theme.primary } }
                                className='text-sm font-medium h-9 w-48 flex items-center gap-1.5 px-2 py-1 rounded'
                            >
                                <subLink.icon />
                                { subLink.label }
                            </NavLink>
                        )
                    }) }
                </div>
            )) }
        </div>
    )
}

export default withTheme(NavigationPanel)