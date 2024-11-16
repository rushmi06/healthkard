import React from 'react'
import { Outlet } from 'react-router-dom'
import withTheme from "../../theme/Theme";
import Navbar from "../../components/Navbar"
import './Public.css'

function Public({ theme }) {
    return (
        <div style={ { backgroundColor: theme.senary } } className="flex flex-col h-screen w-screen">
            <Navbar />
            <div className='public-body'>
                <Outlet />
            </div>
        </div>
    )
}

export default withTheme(Public)
