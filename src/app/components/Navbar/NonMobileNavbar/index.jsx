import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleTheme from '../../ThemeToggle'
import Logo from '../../Logo'
import Button from '../../Button'
import { navbarLinks } from '../constants'
import { useNavigate } from 'react-router-dom'
import { isUserLoggedIn } from '../../../utils/auth'
import profilePic from '../../../assets/profile.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import CloseOnClickOutside from '../../../components/CloseOnOutsideClick'
import { IoMdLogOut } from "react-icons/io";
import { clearLocalStorage } from '../../../auth/localStorage'

const NonMobileNavbar = ({ theme }) => {
    const navigate = useNavigate()
    const [dropdownOpen, setDropdownOpen] = useState(false)
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
                            <div key={ index } className='relative text-sm font-medium flex-1 text-center'>
                                {
                                    !link.subLinks ?
                                        <Link to={ link.path } key={ index } className=''>{ link.label }</Link>
                                        : <div key={ index } className='flex items-center gap-2 cursor-pointer' onClick={ () => setDropdownOpen(true) }>{ link.label } { dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown /> }</div>
                                }
                                {
                                    link.subLinks && link.subLinks.length > 0 && dropdownOpen && (
                                        <CloseOnClickOutside onClose={ () => setDropdownOpen(false) }>
                                            <div style={ { backgroundColor: theme.secondary } } className='absolute -bottom-16 left-0 w-64 flex flex-col gap-2 p-2 text-sm text-left'>
                                                {
                                                    link.subLinks.map((subLink, subIndex) => (
                                                        <Link to={ subLink.path } key={ subIndex } className=''>{ subLink.label }</Link>
                                                    ))
                                                }
                                            </div>
                                        </CloseOnClickOutside>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-4/12 flex justify-end items-center gap-4'>
                <ToggleTheme />
                { isUserLoggedIn() ? <div className='flex gap-4'>
                    <Profile theme={ theme } />
                </div> : <div className='flex gap-4'>
                    <Button label='Sign Up' type='btn-tertiary' outline onClick={ () => navigate('/auth/user/signup') } />
                    <Button label='Login' type='btn-primary' onClick={ () => navigate('/auth/user/login') } />
                </div> }
            </div>
        </div>
    )
}


const Profile = ({ theme }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const navigate = useNavigate()
    const userId = localStorage.getItem('userToken')
    const handleLogout = () => {
        clearLocalStorage()
        navigate('/')
        window.location.reload()
    }
    const onProfileClick = () => {
        setDropdownOpen(!dropdownOpen)
        navigate(`/profile/${userId}`)
    }
    return (
        <CloseOnClickOutside onClose={ () => setDropdownOpen(false) }>
            <div className='flex items-center gap-2 relative'>
                <img src={ profilePic } alt='profile' className='w-8 h-8 rounded-full hover:cursor-pointer' onClick={ () => setDropdownOpen(!dropdownOpen) } />
                { dropdownOpen &&
                    <div style={ { backgroundColor: theme.senary, color: theme.text } } className='absolute -bottom-16 right-0 rounded w-32 flex flex-col gap-2 p-2 text-sm text-left'>
                        <div className='flex items-center gap-2 hover:cursor-pointer' onClick={ onProfileClick }><img src={ profilePic } alt='profile' className='w-4 h-4 rounded-full' /> Profile</div>
                        <div style={ { color: theme.danger } } className='flex items-center gap-2 font-semibold hover:cursor-pointer' onClick={ handleLogout }><IoMdLogOut /> Logout</div>
                    </div>
                }
            </div>
        </CloseOnClickOutside>
    )
}
export default NonMobileNavbar