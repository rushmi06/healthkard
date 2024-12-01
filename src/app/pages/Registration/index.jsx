import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Link, Outlet } from 'react-router-dom'
import withTheme from '../../theme/Theme'
import { IoMdAdd } from "react-icons/io";
import CloseOnOutsideClick from '../../components/CloseOnOutsideClick';

function Registration({ theme }) {
    return (
        <div style={ { backgroundColor: theme.secondary } } className='flex flex-col w-full h-screen'>
            <Navbar />
            <Outlet />
            <FloatingButton theme={ theme } />
        </div>
    )
}

const FloatingButton = ({ theme }) => {
    const options = [{ label: 'User Registration', link: 'new-user' }, { label: 'User Renewal', link: 'user-renewal' }, { label: 'Hospital Registration', link: 'new-hospital' }]
    const [isVisible, setIsVisible] = useState(false);
    return (
        <CloseOnOutsideClick onClose={ () => setIsVisible(false) }>
            <div onClick={ () => setIsVisible(!isVisible) } style={ { backgroundColor: theme.secondary, color: theme.text } } className='fixed bottom-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow'>
                <div><IoMdAdd /></div>
                { isVisible && <div style={ { backgroundColor: theme.senary } } className='absolute bottom-12 right-2 w-44 rounded-lg shadow-lg text-right flex flex-col'>
                    { options.map((option, index) => <Link to={ `/registration/${option.link}` } key={ index } className='text-sm font-semibold hover:bg-black/50 px-4 py-2'>{ option.label }</Link>) }
                </div> }
            </div>
        </CloseOnOutsideClick>
    )
}

export default withTheme(Registration)
