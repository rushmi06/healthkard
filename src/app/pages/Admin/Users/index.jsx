import React from 'react'
import Statistic from '../components/Statistic'
import { statisticsTemplate } from './constants'
import { Outlet } from 'react-router-dom'
import '../admin.css'
function Users() {
    return (
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex h-20 justify-between gap-4 w-full'>
                {
                    statisticsTemplate.users.map((statistic, index) => (
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

export default Users
