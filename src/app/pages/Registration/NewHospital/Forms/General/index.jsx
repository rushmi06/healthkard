import React from 'react'
import Input from '../../../../../components/Input'
function GeneralForm() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 p-4'>
                <Input label='Hospital Name' placeholder='Enter Hospital Name' />
                <Input label='Hospital Type' placeholder='Select Hospital Type' />
                <Input label='Hospital Location' placeholder='Enter Hospital Location' />
                <Input label='Hospital Email' placeholder='Enter Hospital Email' />
                <Input label='Hospital Phone' placeholder='Enter Hospital Phone' />
            </div>
        </div>
    )
}

export default GeneralForm
