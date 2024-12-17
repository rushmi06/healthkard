import React, { useState } from 'react'
import Statistic from '../components/Statistic'
import { statisticsTemplate } from './constants'
import { Outlet } from 'react-router-dom'
import '../admin.css'
import httpService from '../../../api/httpService'
import customUseEffect from '../../../hooks/customUseEffect'
function Users() {
    const [statistics, setStatistics] = useState(statisticsTemplate)
    customUseEffect(() => {
        const fetchStatistics = async () => {
            try {
                const response = await httpService.get('users/statistics')
                setStatistics(response)
            } catch (error) {
                console.error(error)
            }
        }
        fetchStatistics()
    }, [])
    return (
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex h-20 justify-between gap-4 w-full'>
                {
                    statistics.users.map((statistic, index) => (
                        <Statistic key={ index } label={ statistic.label } value={ statistic.value } style={ { width: '33.33%' } } />
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
