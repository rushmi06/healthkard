import React from 'react'
import withTheme from '../../theme/Theme'

function DragAndDropFile({ placeholder = 'Drag and drop your file here or click to upload', style, theme }) {
    return (
        <div style={ { backgroundColor: theme.secondary, width: '50%', height: '40%', border: `1px dashed ${theme.primary}`, ...style } } className='p-4 rounded flex flex-col justify-center items-center items-center'>
            <div style={ { color: theme.primary } } className='text-xl font-semibold w-1/2 text-center'>{ placeholder }</div>
        </div>
    )
}

export default withTheme(DragAndDropFile)
