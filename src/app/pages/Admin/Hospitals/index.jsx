import React from 'react'
import Statistic from '../components/Statistic'
import { statistics } from './constants'
import { Outlet } from 'react-router-dom'
// import './style.css'
import '../admin.css'
function Hospitals() {
    return (
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex h-20 justify-between gap-4 w-full'>
                {
                    statistics.hospitals.map((statistic, index) => (
                        <Statistic key={ index } label={ statistic.label } value={ statistic.value } color={ statistic.color } style={ { width: '33.33%' } } />
                    ))
                }
            </div>
            <div id='content' className='flex'>
                <Outlet />
            </div>
        </div>
    )
}

export default Hospitals
