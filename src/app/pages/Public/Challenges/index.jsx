import React from 'react'
import withTheme from '../../../theme/Theme'
import CountDown from '../../../components/CountDown'
import { formatDate } from '../../../utils/format'
function Challenges({ theme }) {
    const time = new Date('2024-12-12')
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='w-full h-full flex flex-col gap-4 justify-center items-center p-4'>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-2xl font-bold'>Challenges</h1>
                <div className='flex flex-col gap-2 text-sm text-center'>
                    <div className='text-center'>We are launching our challenges soon. Please come back this</div>
                    <div className='font-bold border-2 border-green-400 mx-2 text-2xl hover:bg-green-400 hover:text-white rounded-md p-2 cursor-pointer'> { formatDate(time) }</div>
                </div>
            </div>
            <div className='text-center'>Countdown to the challenge</div>
            <CountDown time={ time } />
        </div>
    )
}

export default withTheme(Challenges)
