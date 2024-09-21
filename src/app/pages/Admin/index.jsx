import React from 'react'
import NavigationPanel from './components/NavigationPanel'
import Logo from './components/Logo'
import Button from '../../components/Button'
import { Outlet } from 'react-router-dom'
function Admin() {
    return (
        <div className='flex p-4 h-screen w-full'>
            <div className='flex flex-col gap-4 w-56'>
                <Logo />
                <NavigationPanel />
                <Button label='Logout' type='btn-danger' onClick={ () => { } } />
            </div>
            <Outlet />
        </div>
    )

}

export default Admin
