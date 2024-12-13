import React, { useState } from 'react'
import { FaWalking, FaUsers, FaUserTie, FaHospital } from 'react-icons/fa';

function DashBoard() {
    const [stats] = useState([
        { label: 'Total Steps', value: 465871, icon: <FaWalking size={ 24 } color={ 'blue' } /> },
        { label: 'Current Streak', value: 10, icon: <FaUsers size={ 24 } color={ 'green' } /> },
        { label: 'Average Steps', value: 3648, icon: <FaUserTie size={ 24 } color={ 'purple' } /> },
        { label: 'Progress', value: 30, icon: <FaHospital size={ 24 } color={ 'red' } /> },
    ]);
    return (
        <div className='flex flex-col gap-2 h-full p-4'>
            <div className='text-2xl font-bold'>Steps Challenge Dashboard</div>
            <div className='flex gap-4'>
                {
                    stats.map((stat, index) => (
                        <div key={ index } className='flex items-center justify-start gap-2 flex-1 rounded shadow p-2'>
                            { stat.icon }
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='text-2xl font-bold'>{ stat.value }</div>
                                <div className='text-sm text-gray-500'>{ stat.label }</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='shadow rounded p-4 flex-1'>
            </div>
        </div>
    )
}

export default DashBoard
