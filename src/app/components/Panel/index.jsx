import React, { useState, useEffect } from 'react'
import withTheme from '../../theme/Theme'
function Panel({ header, theme, onSelect = () => { }, body }) {
    const [selected, setSelected] = useState(header[0])

    useEffect(() => {
        onSelect(selected)
    }, [selected, onSelect])

    return (
        <div className='flex flex-col w-full h-full'>
            <PanelHeader theme={ theme } header={ header } selected={ selected } setSelected={ setSelected } />
            <PanelBody theme={ theme } selected={ selected } body={ body } />
        </div>
    )
}

function PanelHeader({ theme, header, selected, setSelected }) {
    return (
        <div className='flex'>
            { header.map((item, index) => (
                <button type='button' onClick={ () => setSelected(item) } key={ index } style={ { backgroundColor: selected === item ? theme.primary : '', color: selected !== item ? theme.text : theme.textSecondary, } } className='flex rounded-t px-2 py-1 min-w-24 items-center justify-center'>{ item }</button>
            )) }
        </div>
    )
}

function PanelBody({ theme, selected, body }) {
    return (
        <div style={ { borderTop: `1px solid ${theme.primary}` } } className='flex flex-col w-full h-full gap-2 rounded rounded-tl-none'>
            { body }
        </div>
    )
}

export default withTheme(Panel)
