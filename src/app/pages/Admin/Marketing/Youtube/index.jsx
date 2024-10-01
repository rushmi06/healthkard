import React from 'react'
import withTheme from '../../../../theme/Theme'
function Youtube({ theme }) {
    return (
        <div style={ { backgroundColor: theme.secondary } } className='p-4 rounded h-full flex-grow flex flex-col gap-2'>
            <div className='flex justify-between'>
                <div style={ { color: theme.primary } } className='text-2xl font-semibold'>Youtube</div>
            </div>
        </div>
    )
}

export default withTheme(Youtube)
