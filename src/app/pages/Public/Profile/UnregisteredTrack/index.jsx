import React, { useEffect, useState } from 'react'
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
import pay from '../../../../utils/pay';
import toast from 'react-hot-toast';
import { plans } from '../../../constants';

function UnregisteredTrack({ theme, user, setUser }) {
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [isEnterDetailsModalOpen, setIsEnterDetailsModalOpen] = useState(false);
    const [completedSteps, setCompletedSteps] = useState([false, false, false])
    const [choosePlanModalOpen, setChoosePlanModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [agent, setAgent] = useState('Self');
    const onGetImage = async (image) => {
        try {
            const number = getFromLocalStorage('userNumber')
            const updatedUser = { ...user, image }
            await httpService.put('users/unregistered', number, updatedUser)
            setUser(updatedUser)
            setCompletedSteps(prev => [true, ...prev.slice(1)])
        } catch (error) {
            console.log(error);
        }
    }

    const handlePay = async () => {
        if (!selectedPlan) {
            setChoosePlanModalOpen(true)
            return
        }
        try {
            const amount = plans.find(plan => plan.name === selectedPlan)?.total;
            await pay(user?.number, user?.healthId, amount, selectedPlan, agent, user?.name, 'new user');
            setCompletedSteps(prev => [...prev.slice(0, 2), true]);
            toast.success('Payment successful');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

    return (
        <div className='flex flex-col gap-4 w-full h-full p-2 lg:p-4'>
            <div className='text-2xl font-bold '>Track</div>
            <div className='flex justify-between w-full'>
                <Step title='Step 1' description='Take a photo of your healthKard' icon={ FaCameraRetro } theme={ theme } isSuccess={ completedSteps[0] || user?.image } buttonLabel={ user?.image ? 'Retake' : 'Take Photo' } onClick={ () => setIsCameraOpen(true) } setCompletedSteps={ setCompletedSteps } />
                <Step title='Step 2' description='Enter your details' icon={ MdDataSaverOff } theme={ theme } isSuccess={ completedSteps[1] || (user?.registered && user?.dob && user?.email) } buttonLabel='Enter Details' onClick={ () => setIsEnterDetailsModalOpen(true) } setCompletedSteps={ setCompletedSteps } />
                <Step title='Step 3' description='Pay for your health card' icon={ MdOutlinePayment } theme={ theme } isSuccess={ completedSteps[2] } buttonLabel='Start Payment' onClick={ handlePay } setCompletedSteps={ setCompletedSteps } />
            </div>
            { isCameraOpen && <Camera isCameraOpen={ isCameraOpen } setIsCameraOpen={ setIsCameraOpen } getImage={ onGetImage } /> }
            { isEnterDetailsModalOpen && <EnterDetailsModal theme={ theme } user={ user } setUser={ setUser } isOpen={ isEnterDetailsModalOpen } setIsOpen={ setIsEnterDetailsModalOpen } setCompletedSteps={ setCompletedSteps } /> }
            { choosePlanModalOpen && <ChoosePlanModal isOpen={ choosePlanModalOpen } setIsOpen={ setChoosePlanModalOpen } setSelectedPlan={ setSelectedPlan } selectedPlan={ selectedPlan } handlePay={ handlePay } agent={ agent } setAgent={ setAgent } /> }
        </div>
    )
}

const Step = ({ title, description, icon: Icon, theme, isSuccess, buttonLabel, onClick }) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-between w-full lg:w-1/3'>
            <div style={ { backgroundColor: isSuccess ? theme.success : theme.tertiary } } className='w-20 h-20 rounded-full flex items-center justify-center'>
                <Icon size={ 30 } />
            </div>
            <div className='text-lg font-bold'>{ title }</div>
            <div className='text-sm text-center'>{ description }</div>
            <Button label={ buttonLabel } onClick={ onClick } />
        </div>
    )
}

const EnterDetailsModal = ({ theme, user, setUser, isOpen, setIsOpen, setCompletedSteps }) => {
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
            await httpService.put('users/unregistered', user?.number, updatedUser)
            setUser(updatedUser)
            setIsOpen(false)
            setCompletedSteps(prev => [...prev.slice(0, 1), true, ...prev.slice(2)])
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

const ChoosePlanModal = ({ isOpen, setIsOpen, setSelectedPlan, selectedPlan, handlePay, agent, setAgent }) => {
    const [agents, setAgents] = useState(['Self'])
    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const agents = await httpService.get(`agents`)
                setAgents(agents.map(agent => agent?.name + ' - ' + agent?.agentID))
            } catch (error) {
                console.log(error)
            }
        }
        fetchAgents()
    }, [])

    return (
        <Modal open={ isOpen } onClose={ () => setIsOpen(false) } style={ { width: '50%', height: 'fit-content' } }>
            <div className='w-full h-full flex flex-col gap-4 items-center justify-center p-4'>
                <div className='text-2xl font-bold text-left w-full'>Choose Plan</div>
                <div className='flex flex-col gap-2 w-full'>
                    <Select label='Select Agent'
                        options={ agents }
                        style={ { width: '100%' } }
                        value={ agent }
                        onChange={ (agent) => setAgent(agent) } />
                    <Select label='Plan' value={ selectedPlan } onChange={ (value) => setSelectedPlan(value) } options={ plans.map(plan => plan.name) } />
                </div>
                <div className='flex justify-between w-full'>
                    <Button label='Cancel' onClick={ () => setIsOpen(false) } type='btn-secondary' />
                    <Button label='Pay' onClick={ handlePay } type='btn-primary' />
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(UnregisteredTrack)
