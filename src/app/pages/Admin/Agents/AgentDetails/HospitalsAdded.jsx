import React, { useEffect, useState } from 'react'
import { formatData } from '../../../../utils/agentDataFormat';
import withTheme from '../../../../theme/Theme';

function HospitalsAdded({ hospitals, theme }) {
    const [formattedHospitals, setFormattedHospitals] = useState([]);
    useEffect(() => {
        const formattedHospitals = formatData(hospitals, 'hospitalID');
        setFormattedHospitals(formattedHospitals.reverse());
    }, [hospitals]);

    return (
        <div style={ { color: theme.text } } className='flex flex-col gap-2 p-2'>
            {
                formattedHospitals?.map((date, index) => (
                    <div key={ index } className='flex flex-col gap-2'>
                        <div style={ { backgroundColor: theme.secondary } } className='w-full flex justify-between text-lg font-semibold p-2 rounded-md'>
                            <div className=''>{ date.date }</div>
                            <div className='flex text-sm items-center gap-4'>
                                <div className=''>Count : { date.hospitalID.length }</div>
                            </div>
                        </div>
                        { date.hospitalID.map((hospital, index) => (
                            <HospitalCard key={ index } hospital={ hospital } />
                        )) }
                    </div>
                ))
            }
        </div>
    )
}

export default withTheme(HospitalsAdded);

const HospitalCard = ({ hospital }) => {
    return (
        <div className='w-full flex flex-col justify-between p-2 rounded-md'>
            <div className='text-sm font-semibold'>{ hospital.name }</div>
            <div className='text-xs '>{ hospital.hospitalId }</div>
        </div>
    )
}

