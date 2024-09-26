import React from 'react'
import Statistic from '../../components/Statistic'
import { statistics } from './constants'
import Input from '../../../../components/Input'

function NewAgent() {
    return (
        <div className='w-full flex-grow flex flex-col'>
            <div className='flex h-20  justify-between gap-4 w-full'>
                {
                    statistics.agents.map((statistic, index) => (
                        <Statistic key={ index } label={ statistic.label } value={ statistic.value } color={ statistic.color } style={ { width: '30%' } } />
                    ))
                }
            </div>
            <div className='w-full'>
                <Input label='Agent Name' type='text' onChange={ () => { } } />
            </div>
        </div>
    )
}

export default NewAgent
