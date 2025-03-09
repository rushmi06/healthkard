import React from 'react'
import withTheme from '../../../../theme/Theme'
import AppLogo from '../../../../assets/logo.svg'
import ThemeToggle from '../../../../components/ThemeToggle'

function Navbar({ theme, name, id, logo }) {
    return (
        <div style={ { backgroundColor: theme.senary } } className='flex items-center justify-between h-16 relative p-2'>
            <div style={ { backgroundColor: theme.secondary } } className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'></div>
            <div style={ { color: theme.text } } className='flex items-center justify-between w-full'>
                <div className='lg:block hidden font-semibold text-lg'>Welcome to the Dashboard</div>
                <img src={ AppLogo } alt='logo' className='w-10 h-10 lg:hidden block' />
                <div className='flex items-center justify-center gap-2'>
                    <div className='flex flex-col items-end justify-center'>
                        <div className='font-bold text-sm'>{ name }</div>
                        <div className='font-thin text-xs'>{ id }</div>
                    </div>
                    <div style={ { borderColor: theme.primary } } className='flex flex-col items-end justify-center w-12 h-12 rounded-full border-2 overflow-hidden'>
                        <img src={ logo } alt='logo' className='w-10 h-10' />
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default withTheme(Navbar)
