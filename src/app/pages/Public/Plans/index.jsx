import React from 'react'
import withTheme from '../../../theme/Theme'

function Plans({ theme }) {
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='flex h-full w-full'>
            plans
        </div>
    )
}

export default withTheme(Plans)
