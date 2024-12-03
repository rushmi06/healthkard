import React from 'react'
import logo from '../../assets/logo.svg'
import './style.css'
import withTheme from '../../theme/Theme'
import { useNavigate } from 'react-router-dom'

function Logo({ column = false, main = false, theme }) {
    const navigate = useNavigate()

    return (
        <div onClick={ () => navigate('/') } style={ { backgroundColor: main ? '' : theme.secondary } } className={ `w-full ${main ? '' : 'h-12'} flex items-center justify-center gap-2 rounded hover:cursor-pointer ${column ? 'flex-col' : ''}` }>
            <img src={ logo } alt='logo' style={ { width: '30px', height: '22px' } } />
            <div style={ { color: theme.success } } className='text-lg font-bold'>Healthkard</div>
        </div >
    )

}

export default withTheme(Logo)
