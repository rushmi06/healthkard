import React, { useState } from 'react'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
function SupportBox() {
    const [description, setDescription] = useState('')
    return (
        <div className='flex flex-col items-start justify-center gap-4 w-full h-full p-4'>
            <div className='text-lg font-bold text-left'>Support</div>
            <div className='text-sm text-left'>We are here to help you</div>
            <div className='flex flex-col items-center justify-center gap-2 w-full h-full'>
                <Input
                    type='text'
                    placeholder='Enter your message'
                    value={ description }
                    onChange={ (e) => setDescription(e.target.value) }
                    multiline={ true }
                    rows={ 10 }
                    style={ { width: '100%', height: '100%' } }
                    inputStyle={ { width: '100%', height: '100%' } }
                />
                <div className='w-full flex items-center justify-end'>
                    <Button label='Submit' onClick={ () => { } } />
                </div>
            </div>
        </div>
    )
}

export default SupportBox
