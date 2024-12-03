import React from 'react'
import { links } from '../constants'
import { RxCross2 } from 'react-icons/rx'
function SideNavigationBar({ theme, activeIndex, setActiveIndex, closeSideBar, setCloseSideBar }) {
    const onClick = (index) => {
        setActiveIndex(index)
        setCloseSideBar(true)
    }
    return (
        <div style={ { backgroundColor: theme.senary } } className={ `flex flex-col z-20  items-end justify-center lg:h-full w-full py-4 relative shadow-lg lg:shadow-none ${closeSideBar ? 'hidden lg:block' : 'block'}` }>
            <div style={ { backgroundColor: theme.secondary } } className='w-full h-full absolute top-0 left-0 -z-10'></div>
            <div className='lg:hidden absolute top-2 left-2 z-10 cursor-pointer' onClick={ () => setCloseSideBar(!closeSideBar) }><RxCross2 className='text-2xl ' /></div>
            <div className='w-full h-full flex flex-col items-end justify-start'>

                { links.map((link) => (
                    <div key={ link.index } onClick={ () => onClick(link.index) } style={ { backgroundColor: activeIndex === link.index ? theme.senary : '' } } className='flex items-center justify-start gap-2 w-10/12 py-2 px-4 cursor-pointer'>
                        { link.icon }
                        <p className='text-sm lg:text-lg font-medium'>{ link.label }</p>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default SideNavigationBar
