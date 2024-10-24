import React from 'react'
import withTheme from '../../theme/Theme'
import CloseOnOutsideClick from '../CloseOnOutsideClick'
function Slider({ isVisible, onClose = () => { }, children, theme }) {

    return (
        <CloseOnOutsideClick onClose={ onClose }>
            <div
                style={ {
                    backgroundColor: theme.senary,
                    borderLeft: `1px solid ${theme.secondary}`,
                    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.5s ease-in-out',
                    color: theme.primary
                } }
                className='lg:w-1/2 w-full absolute right-0 top-0 h-full z-10 shadow'
            >
                { children }
            </div>
        </CloseOnOutsideClick>
    )
}

export default withTheme(Slider)
