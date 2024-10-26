import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import withTheme from '../../../theme/Theme'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import DragAndDropFile from '../../../components/DragAndDropFile'
import { PLANS } from './constants'
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import useViewport from '../../../utils/useViewPort'

function NewUser({ theme }) {
    const [currentFormId, setCurrentFormId] = useState(0);
    return (
        <div style={ { backgroundColor: theme.senary, backgroundImage: `linear-gradient(45deg, ${theme.secondary} , ${theme.senary}, ${theme.secondary})` } } className='flex flex-col w-full h-screen'>
            <Navbar />
            <div className='flex flex-1 justify-center items-center'>
                { currentFormId === 0 && <ContactCard theme={ theme } onNext={ () => setCurrentFormId(1) } /> }
                { currentFormId === 1 && <BasicDetailsCard theme={ theme } onNext={ () => setCurrentFormId(2) } onPrevious={ () => setCurrentFormId(0) } /> }
                { currentFormId === 2 && <PhotoCard theme={ theme } onNext={ () => setCurrentFormId(3) } onPrevious={ () => setCurrentFormId(1) } /> }
                { currentFormId === 3 && <PlanCard theme={ theme } /> }
            </div>
        </div>
    )
}

export default withTheme(NewUser)

function ContactCard({ theme, onNext }) {
    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className=' flex flex-col gap-4 lg:w-1/2 w-full lg:h-fit lg:min-h-96 h-full rounded p-4'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='text-xl font-semibold pb-4'>User Contact Details</div>
            <div className='flex flex-col flex-1 justify-between'>
                <div className='flex flex-1 justify-center flex-col  gap-4'>
                    <Input label='Name' placeholder='Enter your name' />
                    <Input label='Email' placeholder='Enter your email' />
                    <Input label='Mobile Number' placeholder='Enter your mobile number' />
                </div>
                <div className='flex justify-end'>
                    <Button label='Next' type='btn-primary' onClick={ onNext } />
                </div>
            </div>
        </div>
    )
}


function BasicDetailsCard({ theme, onNext, onPrevious }) {
    const { width } = useViewport();

    const getInputStyle = (baseWidth) => {
        if (width < 640) {
            return { width: '100%' };
        } else if (width < 1024) {
            return { width: 'calc(50% - 0.5rem)' };
        } else {
            return { width: baseWidth };
        }
    };

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className=' flex flex-col gap-4 w-full lg:w-1/2 h-full lg:h-fit lg:min-h-96 rounded p-4'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='text-xl font-semibold pb-4'>User Basic Details</div>
            <div className='flex flex-col flex-1 justify-between'>
                <div className='flex flex-1 justify-center flex-col gap-4'>
                    <div className='text-lg font-semibold'>Basic Details</div>
                    <div className='flex flex-wrap gap-4'>
                        <Input
                            label='Date of Birth'
                            type='date'
                            placeholder='Enter your date of birth'
                            style={ getInputStyle('50%') }
                        />
                        <Input
                            label='Gender'
                            placeholder='Select your gender'
                            style={ getInputStyle('50%') }
                        />
                    </div>
                    <div className='text-lg font-semibold'>Address</div>
                    <div className='flex flex-wrap justify-between gap-4'>
                        <Input
                            label='Address'
                            placeholder='Enter your address'
                            style={ getInputStyle('45%') }
                        />
                        <Input
                            label='City'
                            placeholder='Enter your city'
                            style={ getInputStyle('45%') }
                        />
                        <Input
                            label='Pin Code'
                            placeholder='Enter your pin code'
                            style={ getInputStyle('45%') }
                        />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Button label='Previous' type='btn-secondary' onClick={ onPrevious } />
                    <Button label='Next' type='btn-primary' onClick={ onNext } />
                </div>
            </div>
        </div>
    )
}

function PhotoCard({ theme, onNext, onPrevious }) {
    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className=' flex flex-col gap-4 lg:w-1/2 w-full lg:h-96 h-full rounded p-4'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='text-xl font-semibold pb-4'>Upload Photo</div>
            <div className='flex flex-col flex-1 justify-between'>
                <div className='flex flex-1 justify-center flex-col gap-4'>
                    <DragAndDropFile style={ { width: '100%', height: '50%' } } />
                    <div style={ { color: theme.tertiary } } className='text-sm text-center'>--- or ---</div>
                    <Button label='Take a picture' type='btn-primary' />
                </div>
                <div className='flex justify-between'>
                    <Button label='Previous' type='btn-secondary' onClick={ onPrevious } />
                    <Button label='Save and Next' type='btn-primary' onClick={ onNext } />
                </div>
            </div>
        </div>
    )
}

const PlanCard = ({ theme }) => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
    }

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className=' flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-96 lg:h-fit h-full rounded p-4'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='text-xl font-semibold pb-4'>Choose a Plan</div>
            <div className='flex flex-col w-full flex-1 justify-between'>
                <div className='flex flex-col flex-1 gap-4 w-full'>
                    { !selectedPlan ? <div className='flex flex-col flex-wrap gap-4'>
                        {
                            PLANS.map((plan) => (
                                <div key={ plan.id } className='flex flex-col lg:flex-row gap-4 justify-between'>
                                    <div className='flex flex-col'>
                                        <div className='text-lg font-semibold'>{ plan.name }</div>
                                        <div className=''>Enjoy { plan.duration } of unlimited access to all our features</div>
                                    </div>
                                    <Button label={ `Pay ₹${plan.price}` } icon={ HiOutlineArrowTopRightOnSquare } iconPosition='right' type='btn-primary' onClick={ () => handlePlanClick(plan) } />
                                </div>
                            ))
                        }
                    </div>
                        : <div className='flex flex-col flex-1 lg:justify-between justify-start items-start gap-4 w-full'>
                            <div className='flex gap-4 font-semibold text-lg'>
                                <div className=''>Selected plan: </div>
                                <div className='font-bold'>{ selectedPlan.name }</div>
                                <div className=''>|</div>
                                <Button label='Change Plan' type='btn-tertiary' />
                            </div>
                            <div className='flex flex-col gap-4 w-full'>
                                <div className=''>Payment Details</div>
                                <div className='flex flex-col border-dashed border border-primary p-4 rounded'>
                                    <div className='flex justify-between py-1'>
                                        <div className=''>Total Amount: </div>
                                        <div className='font-semibold'>₹{ selectedPlan.price + selectedPlan.discount }</div>
                                    </div>
                                    <div className='flex justify-between py-1'>
                                        <div className=''>Discount: </div>
                                        <div className='font-semibold'> - ₹{ selectedPlan.discount }</div>
                                    </div>
                                    <div style={ { borderTop: `1px solid ${theme.primary}` } } className='flex justify-between py-1'>
                                        <div className=''>Payable Amount <span className='text-[10px] text-center'>(Incl. GST)</span>: </div>
                                        <div className='font-semibold'>₹{ selectedPlan.price }</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className=''>Payment Method</div>
                                    <div className='flex gap-4'>
                                        <Button label='Pay with UPI' type='btn-primary' />
                                        <Button label='Pay with Cash' type='btn-secondary' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}