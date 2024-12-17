import React, { useEffect } from 'react'
import NavigationPanel from './components/NavigationPanel'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import { Outlet, useNavigate } from 'react-router-dom'
import withTheme from '../../theme/Theme'
import './admin.css'
import { removeFromLocalStorage, getFromLocalStorage } from '../../auth/localStorage'

function Admin({ theme }) {
    const navigate = useNavigate()
    const logout = () => {
        removeFromLocalStorage('adminToken')
        navigate('/')
    }
    useEffect(() => {
        if (!getFromLocalStorage('adminToken')) {
            navigate('/auth/admin-login')
        }
    }, [])
    return (
        <div className='flex p-4 h-screen w-full gap-4 ' style={ { backgroundColor: theme.senary || '#fff' } }>
            <div className='flex flex-col gap-4 w-56'>
                <Logo />
                <NavigationPanel />
                <Button label='Logout' type='btn-danger' onClick={ logout } />
            </div>
            <div id='admin-content' className='w-full '>
                <Outlet />
            </div>
        </div>
    )
}

export default withTheme(Admin)
