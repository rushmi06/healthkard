import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { navbarLinks } from './constants'
import Button from '../Button'
import withTheme from '../../theme/Theme'
import ToggleTheme from '../ThemeToggle'
import UserLogin from '../../auth/UserLogin'
import UserSignup from '../../auth/UserSignup'
function Navbar({ theme }) {
    const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [signupModalOpen, setSignupModalOpen] = useState(false)
    return (
        <div className='flex fixed z-50 justify-between items-center px-4 py-2 w-full h-14' style={ { backgroundColor: theme.senary } }>
            <div style={ { backgroundColor: theme.secondary } } className='w-full h-full absolute top-0 left-0 -z-10'></div>
            <div className='flex gap-4 w-8/12 h-full items-center'>
                <div className='w-2/12'>
                    <Logo main />
                </div>
                <div style={ { color: theme.text } } className='hidden lg:flex gap-4 w-8/12 justify-between'>
                    {
                        navbarLinks.map((link, index) => (
                            <Link to={ link.path } key={ index } className='text-sm font-medium'>{ link.label }</Link>
                        ))
                    }
                </div>
            </div>
            <div className='w-4/12 flex justify-end items-center gap-4'>
                <UserLogin open={ loginModalOpen } onClose={ () => setLoginModalOpen(false) } />
                <UserSignup open={ signupModalOpen } onClose={ () => setSignupModalOpen(false) } />
                <Button label='Login' type='btn-primary' onClick={ () => setLoginModalOpen(true) } />
                <Button label='Sign Up' type='btn-tertiary' outline onClick={ () => setSignupModalOpen(true) } />
                <ToggleTheme />
            </div>
        </div>
    )
}

export default withTheme(Navbar)
