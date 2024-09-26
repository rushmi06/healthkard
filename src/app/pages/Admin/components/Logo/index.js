import React from 'react'
import logo from '../../../../../logo.svg'
import './style.css'
import withTheme from '../../../../theme/Theme'

function Logo({ theme }) {
    return (

        <div style={ { backgroundColor: theme.secondary } } className='w-full h-12 flex items-center justify-center gap-2 rounded'>
            <img src={ logo } alt='logo' style={ { width: '30px', height: '22px' } } />
            <div id='title' className='text-lg font-bold'>HealthKard</div>
        </div >
    )

}

export default withTheme(Logo)
