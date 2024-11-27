import React from 'react'
import withTheme from '../../../../../theme/Theme';

function Header({ heading, subHeading, theme }) {
    return (
        <div>
            <div className="px-2 md:px-5 py-2">
                <h2 style={ { color: theme.primary } } className="text-xl md:text-2xl font-semibold">{ heading }</h2>
                <p style={ { color: theme.text } } className="text-sm md:font-normal">{ subHeading }</p>
            </div>
        </div>
    )
}

export default withTheme(Header);
