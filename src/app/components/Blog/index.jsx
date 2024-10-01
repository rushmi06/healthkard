import React from 'react'
import withTheme from '../../theme/Theme'
function Blog({ blog, theme }) {
    return (
        <div style={ { backgroundColor: theme.senary } } className='flex flex-col justify-between items-start gap-2 w-64 h-72 rounded shadow-md'>
            <img src={ blog.image } alt={ blog.title } />
            <div style={ { color: theme.text } } className='text-left p-2 flex-grow'>
                <div className='text-sm font-semibold'>{ blog.title }</div>
                <div className='text-xs text-ellipsis line-clamp-5 overflow-hidden'>{ blog.description }</div>
            </div>
        </div>
    )
}

export default withTheme(Blog)
