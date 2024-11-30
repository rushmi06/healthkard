import React from 'react'
import { Link } from 'react-router-dom'
import ToggleTheme from '../../ThemeToggle'
import Logo from '../../Logo'
import Button from '../../Button'
import { navbarLinks } from '../constants'
import { useNavigate } from 'react-router-dom'
import { isUserLoggedIn } from '../../../utils/auth'
import profilePic from '../../../assets/profile.png'

const NonMobileNavbar = ({ theme }) => {
    const navigate = useNavigate()
    return (
        <div className='flex fixed z-50 justify-between items-center px-4 py-2 w-full h-14' style={ { backgroundColor: theme.senary } }>
            <div style={ { backgroundColor: theme.secondary } } className='w-full h-full absolute top-0 left-0 -z-10'></div>
            <div className='flex gap-10 w-8/12 h-full items-center'>
                <div className='w-2/12'>
                    <Logo main />
                </div>
                <div style={ { color: theme.text } } className='hidden lg:flex gap-4 w-7/12 justify-between'>
                    {
                        navbarLinks.map((link, index) => (
                            <Link to={ link.path } key={ index } className='text-sm font-medium flex-1 text-center'>{ link.label }</Link>
                        ))
                    }
                </div>
            </div>
            <div className='w-4/12 flex justify-end items-center gap-4'>
                <ToggleTheme />
                { isUserLoggedIn() ? <div className='flex gap-4'>
                    <Profile />
                </div> : <div className='flex gap-4'>
                    <Button label='Sign Up' type='btn-tertiary' outline onClick={ () => navigate('/auth/user/signup') } />
                    <Button label='Login' type='btn-primary' onClick={ () => navigate('/auth/user/login') } />
                </div> }
            </div>
        </div>
    )
}


const Profile = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={ profilePic } alt='profile' className='w-8 h-8 rounded-full' />
        </div>
    )
}
export default NonMobileNavbar