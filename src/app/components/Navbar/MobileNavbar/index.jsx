import React, { useState } from 'react'
import Logo from '../../Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../../../logo.svg'
import { navbarLinks } from '../constants';
import Button from '../../Button';
import CloseOnOutsideClick from '../../CloseOnOutsideClick';
import { Link, useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../../../utils/auth';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
function MobileNavbar({ theme }) {
    return (
        <div className='flex fixed z-50 justify-between items-center px-4 py-2 w-full h-14' style={ { backgroundColor: theme.senary } }>
            <div style={ { backgroundColor: theme.secondary } } className='w-full h-full absolute top-0 left-0 -z-10'></div>
            <div className='w-fit'>
                <Logo main={ true } />
            </div>
            <HamburgerMenu theme={ theme } />
        </div >
    )
}

const HamburgerMenu = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const onLinkClick = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    }

    return (
        <div style={ { color: theme.primary } } className='relative'>
            <div className='flex justify-center items-center' onClick={ () => setIsOpen(true) }>
                <RxHamburgerMenu className='text-2xl' />
            </div>
            { isOpen &&
                <div className='fixed top-0 right-0 flex justify-end w-screen h-screen bg-black/50'>
                    <CloseOnOutsideClick onClose={ () => setIsOpen(false) } style={ { width: '75%', height: '100%' } }>
                        <div style={ { backgroundColor: theme.secondary } } className='relative w-full h-full shadow-lg border-l border-gray-600'>
                            <div style={ { backgroundColor: theme.senary } } className='w-full h-full absolute top-0 right-0 -z-10'></div>
                            <div className='h-full'>
                                <div style={ { backgroundColor: theme.senary } } className='flex items-center justify-start h-1/3 gap-2 p-4'>
                                    <div style={ { borderColor: theme.primary } } className='flex items-center justify-center h-20 w-20 rounded-full border-2 p-1'>
                                        <div style={ { borderColor: theme.primary } } className='flex items-center justify-center h-full w-full rounded-full border'>
                                            <img src={ logo } alt='logo' style={ { width: '60px', height: '44px' } } />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-left justify-center text-wrap'>
                                        <div className='text-lg font-bold'>Your Health</div>
                                        <div className='text-sm'>Your way, please sign in</div>
                                    </div>
                                </div>
                                <div className='h-2/3'>
                                    <div className='p-4'>
                                        {
                                            navbarLinks.map((link, index) => (
                                                <div key={ index } className='flex flex-col items-start justify-start gap-2 p-4'>
                                                    {
                                                        !link.subLinks ?
                                                            <Link to={ link.path } className='text-sm font-semibold' onClick={ onLinkClick }>{ link.label }</Link>
                                                            : <div className='flex items-center gap-2 cursor-pointer w-full justify-between font-semibold' onClick={ () => setDropdownOpen(!dropdownOpen) }>{ link.label } { dropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown /> }</div>
                                                    }
                                                    {
                                                        link.subLinks && link.subLinks.length > 0 && dropdownOpen && (
                                                            <div style={ { backgroundColor: theme.secondary } } className='w-full flex flex-col gap-2 p-3 text-left'>
                                                                {
                                                                    link.subLinks.map((subLink, subIndex) => (
                                                                        <Link to={ subLink.path } key={ subIndex } className=''>{ subLink.label }</Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div style={ { backgroundColor: theme.primary } } className='h-0.5 w-full'></div>
                                    { isUserLoggedIn() ? <div className='flex items-center justify-between gap-2 p-4'>
                                        <Button label='Logout' style={ { width: '100%' } } type='btn-danger' />
                                    </div> : <div className='flex items-center justify-between gap-2 p-4'>
                                        <Button label='Login' style={ { width: '100%' } } onClick={ () => navigate('/auth/user/login') } />
                                        <Button label='Sign Up' style={ { width: '100%' } } type='btn-secondary' onClick={ () => navigate('/auth/user/signup') } />
                                    </div> }
                                </div>
                            </div>
                        </div>
                    </CloseOnOutsideClick>
                </div>
            }
        </div>
    )
}

export default MobileNavbar
