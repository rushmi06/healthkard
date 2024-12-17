import React from 'react'
import withTheme from '../../../../theme/Theme'

function Statistic({ label, value, style = {}, theme }) {
    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary, ...style } } className={ `flex flex-col justify-between h-full px-2 py-2 rounded` }>
            <div className='text-xs'>{ label }</div>
            <div className='text-2xl font-bold flex flex-grow items-center justify-center'>{ value }</div>
        </div>
    )

}

export default withTheme(Statistic)
