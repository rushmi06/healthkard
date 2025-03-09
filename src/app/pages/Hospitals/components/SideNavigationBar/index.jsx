import React from 'react'
import withTheme from '../../../../theme/Theme'
import logo from '../../../../assets/logo.svg'
import { sideNavigationBar } from './constants'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdLogout } from 'react-icons/md'
import './SideNavigationBar.css'

function SideNavigationBar({ theme }) {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('hospitalToken')
        localStorage.removeItem('hospitalId')
        navigate('/auth/my-hospital/login')
    }
    return (
        <div style={ { backgroundColor: theme.secondary } } className='lg:w-16 w-full lg:h-screen h-16 flex lg:flex-col flex-row items-center justify-between lg:pt-2 pt-0 lg:pb-8 pb-0 px-2'>
            <img src={ logo } alt='logo' className='hidden lg:block w-10 h-10' />
            <div className='flex lg:flex-col flex-row items-center lg:justify-center justify-between lg:gap-4 w-full'>
                { sideNavigationBar.map((item) => (
                    <NavLink to={ item.path } key={ item.name } style={ { color: theme.primary } } className='lg:w-full flex-1 p-2 rounded'>
                        <div className='flex lg:flex-col flex-row items-center justify-center gap-2 text-2xl relative group'>
                            <item.icon />
                            <div style={ { backgroundColor: theme.senary, color: theme.text } } className='hidden group-hover:block shadow-md text-sm absolute top-1/2 -translate-y-1/2 -right-1/2 translate-x-full w-32 p-2 rounded '>
                                { item.name }
                                <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'></div>
                            </div>
                        </div>
                    </NavLink>
                )) }
            </div>
            <div style={ { color: theme.danger } } className='lg:block hidden text-2xl cursor-pointer' onClick={ logout }>
                <MdLogout />
            </div>
        </div>
    )
}

export default withTheme(SideNavigationBar)
