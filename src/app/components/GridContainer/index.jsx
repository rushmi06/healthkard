import React from 'react'
import { isUserLoggedIn } from '../../utils/auth'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
function GridContainer({ children, blur = false, label = 'Please Login to view more hospitals' }) {
    const navigate = useNavigate()

    return (
        <div className={ `w-full h-full flex flex-wrap justify-between gap-4 items-center ${isUserLoggedIn() ? 'overflow-y-scroll' : 'overflow-y-hidden'} py-4 relative` }>
            { children }
            { !isUserLoggedIn() && blur && <div className='absolute bottom-0 left-0 w-full h-1/2 flex flex-wrap justify-between gap-4 items-center overflow-y-scroll backdrop-blur-sm bg-gradient-to-t from-white/30 to-transparent'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
                    <div className='text-center text-sm font-medium'>{ label }</div>
                    <Button label='Login' onClick={ () => navigate('/auth/user/login') } />
                </div>
            </div> }
        </div>
    )
}

export default GridContainer
