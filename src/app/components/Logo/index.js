import React from 'react'
import logo from '../../assets/logo.svg'
import './style.css'
import withTheme from '../../theme/Theme'

function Logo({ column = false, main = false, theme }) {
    return (
        <div style={ { backgroundColor: main ? '' : theme.secondary } } className={ `w-full ${main ? '' : 'h-12'} flex items-center justify-center gap-2 rounded ${column ? 'flex-col' : ''}` }>
            <img src={ logo } alt='logo' style={ { width: '30px', height: '22px' } } />
            <div id='title' className='text-lg font-bold'>HealthKard</div>
        </div >
    )

}

export default withTheme(Logo)
