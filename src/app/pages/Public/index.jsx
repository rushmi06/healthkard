import React from 'react'
import { Outlet } from 'react-router-dom'
import withTheme from "../../theme/Theme";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import './Public.css'

function Public({ theme }) {
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className="flex flex-col h-screen w-screen">
            <Navbar />
            <div className='public-body'>
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default withTheme(Public)
