import React from 'react'
import withTheme from '../../theme/Theme'
import MobileNavbar from './MobileNavbar'
import NonMobileNavbar from './NonMobileNavbar'

function Navbar({ theme }) {
    return (
        <>
            <div className='lg:hidden'>
                <MobileNavbar theme={ theme } />
            </div>
            <div className='hidden lg:flex'>
                <NonMobileNavbar theme={ theme } />
            </div>
        </>
    )
}


export default withTheme(Navbar)
