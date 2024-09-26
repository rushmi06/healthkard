import React from 'react'
import withTheme from '../../../../theme/Theme'

function Statistic({ label, value, color, style = {}, theme }) {
    return (
        <div style={ { backgroundColor: color, color: theme.primary, ...style } } className={ `flex flex-col justify-between  px-2 py-2 rounded` }>
            <div className='text-xs'>{ label }</div>
            <div className='text-2xl font-bold flex flex-grow items-center justify-center'>{ value }</div>
        </div>
    )

}

export default withTheme(Statistic)
