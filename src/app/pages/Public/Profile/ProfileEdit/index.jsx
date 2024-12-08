import React, { useState } from 'react'
import Modal from '../../../../components/Modal'
import withTheme from '../../../../theme/Theme'
import Select from '../../../../components/Select'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import httpService from '../../../../api/httpService'
import { toast } from 'react-hot-toast'

function ProfileEdit({ user, setUser, isProfileEditModalOpen, setIsProfileEditModalOpen, theme }) {
    const [userData, setUserData] = useState(user || {})
    const saveData = async () => {
        try {
            const response = await httpService.put(`users`, userData?.healthId, { ...userData })
            if (response.status === 200) {
                setUser(prev => ({ ...prev, ...userData }));
                setIsProfileEditModalOpen(false)
                toast.success('Profile updated successfully');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleChange = (key, value) => {
        setUserData(prev => ({ ...prev, [key]: value }))
    }
    return (
        <Modal open={ isProfileEditModalOpen } onClose={ () => { setIsProfileEditModalOpen(false) } } style={ { height: 'fit-content' } }>
            <div>
                <div style={ { borderBottom: `2px solid ${theme.primary}` } } className='flex items-center justify-between gap-4 w-full h-full p-4'>
                    Edit Profile
                    <div className='flex gap-2 items-center justify-end '>
                        <Button label='Cancel' type='btn-secondary' onClick={ () => { setIsProfileEditModalOpen(false) } } />
                        <Button label='Save' onClick={ saveData } />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 w-full h-full p-4'>
                    <div className='flex lg:flex-row flex-col flex-wrap gap-2 items-start justify-between w-full h-full'>
                        <div className='lg:w-1/2 w-full'>
                            <Input label='Phone Number' value={ userData.number } type='number' onChange={ (e) => { handleChange('number', e.target.value) } } style={ { width: '100%' } } />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <Select label='Gender' options={ ['Male', 'Female', 'Other'] } value={ userData.gender } onChange={ (value) => { handleChange('gender', value) } } style={ { width: '100%' } } />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <Input label='Email' value={ userData.email } onChange={ (e) => { handleChange('email', e.target.value) } } style={ { width: '100%' } } />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <Input label='DOB' value={ new Date(userData?.dob).toISOString().split('T')[0] } type='date' onChange={ (e) => { handleChange('dob', e.target.value) } } style={ { width: '100%' } } />
                        </div>
                    </div>
                    <div className='text-lg font-bold'>Address</div>
                    <div className='flex flex-wrap gap-2 justify-between items-start w-full h-full'>
                        <Input label='Address' value={ userData.address } onChange={ (e) => { handleChange('address', e.target.value) } } style={ { width: '100%' } } />
                        <Input label='City' value={ userData.city } onChange={ (e) => { handleChange('city', e.target.value) } } style={ { width: '50%' } } />
                        <Input label='Pincode' value={ userData.pincode } onChange={ (e) => { handleChange('pincode', e.target.value) } } style={ { width: '45%' } } />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(ProfileEdit)
