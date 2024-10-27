import React, { useState } from 'react'
import withTheme from '../../theme/Theme'

function Select({ label, options, value = 'Male', onChange = () => { }, style, theme }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={ { ...style } } className={ `flex gap-2 h-9 items-center  justify-between` }>
            <label style={ { color: theme.primary, width: '50%' } } className='text-sm font-semibold'>{ label }</label>
            <div style={ { border: `2px solid ${theme.primary}`, backgroundColor: theme.secondary, color: theme.text } } className='w-full h-full rounded px-2 py-1 relative'>
                <button onClick={ () => setIsOpen(!isOpen) } className='text-sm h-full items-center flex'>{ value }</button>
                { isOpen && <div onMouseLeave={ () => setIsOpen(false) } style={ { backgroundColor: theme.senary } } className='w-full z-10 absolute top-9 left-0 max-h-32 overflow-y-auto'>
                    { options.map(option => (
                        <div key={ option } style={ {
                            backgroundColor: value === option ? theme.primary : theme.senary,
                            color: value === option ? theme.textSecondary : theme.text
                        } } className='text-sm w-full px-2 hover:cursor-pointer hover:bg-gray-500 h-9 flex items-center' onClick={ () => onChange(option) }>{ option }</div>
                    )) }
                </div> }
            </div>
        </div>
    )
}

export default withTheme(Select)
