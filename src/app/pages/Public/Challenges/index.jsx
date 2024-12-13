import React from 'react'
import { Outlet } from 'react-router-dom'
function Challenges() {
    return (
        <div className='w-full min-h-full'>
            <Outlet />
        </div>
    )
}

export default Challenges
