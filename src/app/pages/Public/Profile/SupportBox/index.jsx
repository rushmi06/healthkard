import React, { useState } from 'react'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import httpService from '../../../../api/httpService';
import toast from 'react-hot-toast';
function SupportBox({ user }) {
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async () => {
        if (!description) {
            toast.error('Please enter your message')
            return
        }
        if (!user?.email) {
            toast.error('To send the message, email is required')
            return
        }
        setIsLoading(true)
        try {
            const response = await httpService.post('emails/send-support-mail', { name: user?.name, email: user?.email, message: description })
            if (response.status === 200) {
                toast.success('Successfully send the message')
                setDescription('')
            } else {
                toast.error('Failed to send the message')
            }
        } catch (error) {
            toast.error('Failed to send the message')
        } finally {
            setIsLoading(false)
        }
    }
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
                    <Button label='Submit' onClick={ onSubmit } isLoading={ isLoading } />
                </div>
            </div>
        </div>
    )
}

export default SupportBox
