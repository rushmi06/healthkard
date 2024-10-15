import React, { useEffect, useState } from 'react'
import { FaImage } from "react-icons/fa";
import withTheme from '../../../../theme/Theme'
import httpService from '../../../../api/httpService'
import { formatDate } from '../../../../utils/format'

function Records({ theme }) {
    const [records, setRecords] = useState([])
    useEffect(() => {
        const getRecords = async () => {
            try {
                const res = await httpService.get('records');
                setRecords(res)
            } catch (err) {
                console.log(err)
            }
        }
        getRecords()
    }, [])
    return (
        <div style={ { backgroundColor: theme.secondary } } className='flex flex-col w-full rounded h-full'>
            <div style={ { borderBottom: `1px solid ${theme.primary}`, color: theme.primary } } className='flex flex-row justify-between items-center p-4'>
                <div className='text-xl font-bold'>Records</div>
            </div>
            <div className='w-full h-full flex flex-wrap gap-2 p-4'>
                {
                    records.map((record) => (
                        <a href={ record?.url } target='_blank' rel='noreferrer' key={ record._id } style={ { border: `1px solid ${theme.primary}`, backgroundColor: theme.secondary, color: theme.primary } } className='flex py-2 px-4 text-sm rounded h-fit w-fit items-center'>
                            <div className='mr-2'>
                                <FaImage size={ 20 } />
                            </div>
                            <div className='flex flex-col justify-between items-start'>
                                <div className='font-bold'>{ record.name }</div>
                                <div className='text-xs'>{ formatDate(record.date) }</div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default withTheme(Records)
