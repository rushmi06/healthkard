import React, { useState } from 'react'
import { FaCameraRetro } from "react-icons/fa6";
import { MdDataSaverOff } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button';
import Camera from '../../../../components/Camera';
import httpService from '../../../../api/httpService';
import { getFromLocalStorage } from '../../../../auth/localStorage';
import Modal from '../../../../components/Modal';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import toast from 'react-hot-toast';

function UnregisteredTrack({ theme, user, setUser }) {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [isEnterDetailsModalOpen, setIsEnterDetailsModalOpen] = useState(false);
    const onGetImage = async (image) => {
        try {
            const number = getFromLocalStorage('userNumber')
            const updatedUser = { ...user, image }
            await httpService.put('users/unregistered', number, updatedUser)
            setUser(updatedUser)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex flex-col gap-4 w-full h-full p-4'>
            <div className='text-2xl font-bold '>Track</div>
            <div className='flex items-center justify-between w-full flex-1'>
                <Step title='Step 1' description='Take a photo of your healthKard' icon={ FaCameraRetro } theme={ theme } isSuccess={ user?.image } buttonLabel={ user?.image ? 'Retake' : 'Take Photo' } onClick={ () => setIsCameraOpen(true) } />
                <Step title='Step 2' description='Enter your details' icon={ MdDataSaverOff } theme={ theme } isSuccess={ user?.registered && user?.dob && user?.email } buttonLabel='Enter Details' onClick={ () => setIsEnterDetailsModalOpen(true) } />
                <Step title='Step 3' description='Pay for your health card' icon={ MdOutlinePayment } theme={ theme } isSuccess={ false } buttonLabel='Start Payment' onClick={ () => setIsCameraOpen(false) } />
            </div>
            { isCameraOpen && <Camera isCameraOpen={ isCameraOpen } setIsCameraOpen={ setIsCameraOpen } getImage={ onGetImage } /> }
            { isEnterDetailsModalOpen && <EnterDetailsModal theme={ theme } user={ user } setUser={ setUser } isOpen={ isEnterDetailsModalOpen } setIsOpen={ setIsEnterDetailsModalOpen } /> }
        </div>
    )
}

const Step = ({ title, description, icon: Icon, theme, isSuccess, buttonLabel, onClick }) => {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <div style={ { backgroundColor: isSuccess ? theme.success : theme.tertiary } } className='w-20 h-20 rounded-full flex items-center justify-center'>
                <Icon size={ 30 } />
            </div>
            <div className='text-lg font-bold'>{ title }</div>
            <div className='text-sm text-center'>{ description }</div>
            <Button label={ buttonLabel } onClick={ onClick } />
        </div>
    )
}

const EnterDetailsModal = ({ theme, user, setUser, isOpen, setIsOpen }) => {
    const [isUploading, setIsUploading] = useState(false)
    const [userDetails, setUserDetails] = useState({
        dob: '',
        address: '',
        gender: 'Male',
        city: '',
        pincode: '',
    })
    const onSubmit = async () => {
        try {
            setIsUploading(true)
            const updatedUser = { ...user, ...userDetails, registered: true }
            await httpService.put('users/unregistered', user.number, updatedUser)
            setUser(updatedUser)
            setIsOpen(false)
            toast.success('Details uploaded successfully')
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error);
        } finally {
            setIsUploading(false)
        }
    }
    return (
        <Modal open={ isOpen } onClose={ () => setIsOpen(false) }>
            <div className='w-full h-full flex flex-col gap-4 items-center justify-center p-4'>
                <div style={ { color: theme.text } } className='text-2xl font-bold text-left w-full'>Enter Details</div>
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex justify-between w-full items-center gap-2'>
                        <Input label='Date of Birth' type='date' value={ userDetails.dob } onChange={ (e) => setUserDetails({ ...userDetails, dob: e.target.value }) } inputStyle={ { width: '55%' } } style={ { width: '55%' } } />
                        <Select label='Gender' value={ userDetails.gender } onChange={ (value) => setUserDetails({ ...userDetails, gender: value }) } options={ ['Male', 'Female', 'Other'] } style={ { width: '45%' } } />
                    </div>
                    <Input label='Address' value={ userDetails.address } onChange={ (e) => setUserDetails({ ...userDetails, address: e.target.value }) } inputStyle={ { width: '65%' } } />
                    <Input label='City' value={ userDetails.city } onChange={ (e) => setUserDetails({ ...userDetails, city: e.target.value }) } inputStyle={ { width: '65%' } } />
                    <Input label='Pincode' value={ userDetails.pincode } onChange={ (e) => setUserDetails({ ...userDetails, pincode: e.target.value }) } inputStyle={ { width: '65%' } } />
                    <div className='flex justify-between w-full'>
                        <Button label='Cancel' onClick={ () => setIsOpen(false) } />
                        <Button label={ isUploading ? 'Uploading...' : 'Submit' } onClick={ onSubmit } />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(UnregisteredTrack)
