import React, { useState } from 'react'
import Logo from '../../Logo'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../../../logo.svg'
import { navbarLinks } from '../constants';
import Button from '../../Button';
import CloseOnOutsideClick from '../../CloseOnOutsideClick';

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
                                    <div className='flex flex-col items-left justify-center'>
                                        <div className='text-lg font-bold'>HealthKard</div>
                                        <div className='text-sm'>Your health, your way</div>
                                    </div>
                                </div>
                                <div className='h-2/3'>
                                    <div className='p-4'>
                                        {
                                            navbarLinks.map((link, index) => (
                                                <div key={ index } className='flex items-center justify-start gap-2 p-4'>
                                                    <div className='text-sm font-semibold'>{ link.label }</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div style={ { backgroundColor: theme.primary } } className='h-0.5 w-full'></div>
                                    <div className='flex items-center justify-between gap-2 p-4'>
                                        <Button label='Login' style={ { width: '100%' } } />
                                        <Button label='Sign Up' style={ { width: '100%' } } type='btn-secondary' />
                                    </div>
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
