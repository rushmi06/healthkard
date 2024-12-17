import React, { useState } from 'react'
import Statistic from '../components/Statistic'
// import { statistics } from './constants'
import { Outlet } from 'react-router-dom'
import '../admin.css'
import httpService from '../../../api/httpService'
import { toast } from 'react-hot-toast'
import useCustomEffect from '../../../hooks/customUseEffect'

function Hospitals() {
    const [statistics, setStatistics] = useState([])
    useCustomEffect(() => {
        const fetchStatistics = async () => {
            try {
                const response = await httpService.get('hospitals/statistics')
                setStatistics(response)
            } catch (error) {
                toast.error('Something went wrong')
            }
        }
        fetchStatistics()
    }, [])

    return (
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex h-20 justify-between gap-4 w-full'>
                {
                    statistics?.map((statistic, index) => (
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
