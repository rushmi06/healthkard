import React, { useState, useCallback } from 'react'
import withTheme from '../../theme/Theme'
import { useDropzone } from 'react-dropzone'

function DragAndDropFile({ placeholder = 'Drag and drop your file here or click to upload', style, theme, onSelect = () => { } }) {
    const [isDragActive, setIsDragActive] = useState(false)

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            console.log(acceptedFiles)
            onSelect(acceptedFiles[0])
        }
    }, [onSelect])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        onDragEnter: () => setIsDragActive(true),
        onDragLeave: () => setIsDragActive(false)
    })

    return (
        <div
            { ...getRootProps() }
            style={ {
                backgroundColor: theme.secondary,
                width: '50%',
                height: '40%',
                border: `1px dashed ${isDragActive ? theme.tertiary : theme.primary}`,
                ...style
            } }
            className='p-4 rounded flex flex-col justify-center items-center cursor-pointer'
        >
            <input { ...getInputProps() } />
            <div style={ { color: theme.primary } } className='text-xl font-semibold w-1/2 text-center'>
                { placeholder }
            </div>
            { isDragActive && <div style={ { color: theme.tertiary } } className='text-xl font-semibold w-1/2 text-center'>Drop the files here ...</div> }
        </div>
    )
}

export default withTheme(DragAndDropFile)
