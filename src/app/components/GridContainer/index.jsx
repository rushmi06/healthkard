import React from 'react'

function GridContainer({ children }) {

    return (
        <div className='w-full h-full flex flex-wrap justify-between gap-4 items-center overflow-y-scroll py-4'>
            { children }
        </div>
    )
}

export default GridContainer
