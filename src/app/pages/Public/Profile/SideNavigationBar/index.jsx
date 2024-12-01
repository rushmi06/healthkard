import React from 'react'
import { links } from '../constants'
function SideNavigationBar({ theme, activeIndex, setActiveIndex }) {

    return (
        <div style={ { backgroundColor: theme.secondary } } className='flex flex-col items-end justify-center h-full w-full py-4'>
            { links.map((link) => (
                <div key={ link.index } onClick={ () => setActiveIndex(link.index) } style={ { backgroundColor: activeIndex === link.index ? theme.senary : '' } } className='flex items-center justify-start gap-2 w-10/12 py-2 px-4 cursor-pointer'>
                    { link.icon }
                    <p className='text-lg font-medium'>{ link.label }</p>
                </div>
            )) }
        </div>
    )
}

export default SideNavigationBar
