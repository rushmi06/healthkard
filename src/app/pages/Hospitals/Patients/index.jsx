import React, { useState } from 'react'
import { patients } from './constants'
import withTheme from '../../../theme/Theme'
import { groupPatientsByDate } from './Patients'
import { formatDate } from '../../../utils/format'
import useCustomEffect from '../../../hooks/customUseEffect'
import httpService from '../../../api/httpService'
import Healthkard from '../../../components/Healthkard'
function Patients({ theme }) {
    const userId = '66f3c2fc4143e01fba419cb9'
    const [user, setUser] = useState(null)
    useCustomEffect(() => {
        const fetchUser = async () => {
            const user = await httpService.get(`users/user/${userId}`)
            setUser(user)
        }
        fetchUser()
    }, [])
    const groupedPatients = groupPatientsByDate(patients);

    return (
        <div className='flex flex-col gap-2 p-4'>
            <div className='flex flex-col gap-2 p-2'>
                { Object.entries(groupedPatients).map(([date, patientsOnDate]) => (
                    <div key={ date } className='flex flex-col gap-2'>
                        <h2 style={ { color: theme.primary } } className='text-lg font-semibold'>{ formatDate(date) }</h2>
                        <div className='flex flex-wrap gap-2'>
                            { patientsOnDate.map((patient) => (
                                <div key={ patient.healthId } className='flex flex-col gap-2 items-start justify-between rounded hover:cursor-pointer'>
                                    { patient.id === userId &&
                                        <div className=''>
                                            <Healthkard user={ user } />
                                        </div>
                                    }
                                    <div style={ { backgroundColor: userId !== patient.id ? theme.secondary : theme.primary, color: userId !== patient.id ? theme.text : theme.secondaryText } } className='flex flex-col gap-2  px-4 py-2'>
                                        <div className='font-semibold'>{ patient.healthId }</div>
                                        <div className='text-xs'>{ patient.name }</div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default withTheme(Patients)
