import React from 'react'
import { NAVIGATION_PANEL_LINKS } from './constants'
import { colors } from '../../../../theme/colors'
import './style.css'
import { NavLink } from 'react-router-dom'
function NavigationPanel() {
    return (
        <div style={ { backgroundColor: colors.secondary } } id='navigation-panel' className='h-fit rounded flex flex-col gap-1 p-2'>
            {
                NAVIGATION_PANEL_LINKS.map((link) => (
                    <div key={ link.label } className='flex flex-col gap-1 p-1'>
                        <div style={ { color: colors.tertiary } } className='flex flex-col gap-4 text-white text-xs'>
                            { link.label }
                        </div>
                        {
                            link.subLinks.map((subLink) => (
                                <NavLink to={ subLink.link } type='button' key={ subLink.label } style={ { color: colors.primary } } className='text-sm font-medium h-9 w-48 flex items-center gap-1.5 px-2 py-1 rounded'>
                                    <subLink.icon />
                                    { subLink.label }

                                </NavLink>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default NavigationPanel