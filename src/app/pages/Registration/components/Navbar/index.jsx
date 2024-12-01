import React from 'react'
import withTheme from '../../../../theme/Theme'
import logo from '../../../../../logo.svg'
import './Navbar.css'
import ThemeToggle from '../../../../components/ThemeToggle'
import { useNavigate } from 'react-router-dom'

function Navbar({ theme }) {
    const navigate = useNavigate()
    return (
        <div style={ { backgroundColor: theme.senary } } className='flex justify-between items-center border-b border-gray-200 pb-2 pt-5 px-5'>
            <div onClick={ () => navigate('/') } className='flex items-center gap-2'>
                <img src={ logo } alt='logo' style={ { width: '30px', height: '22px' } } />
                <div style={ { color: theme.success } } id='title' className='text-lg font-bold'>Healthkard</div>
            </div>
            <div style={ { color: theme.text } } className='flex items-center gap-4'>
                <ThemeToggle />
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col items-end'>
                        <div className='font-semibold'>Rehaman Syed</div>
                        <div className='text-xs'>Admin</div>
                    </div>
                    <div style={ { backgroundColor: theme.secondary } } className='text-sm font-semibold h-10 w-10 rounded-full flex items-center justify-center'>RS</div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(Navbar)
