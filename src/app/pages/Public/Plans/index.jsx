import React from 'react'
import withTheme from '../../../theme/Theme'
import { formatCurrency } from '../../../utils/format'
import { plans } from '../../constants'
import Button from '../../../components/Button'
import { FaCrown } from "react-icons/fa";
import { isUserLoggedIn } from '../../../utils/auth'
import { useNavigate } from 'react-router-dom';
import alertTrigger from '../../../components/Alert/alertTrigger'

function Plans({ theme }) {
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='flex flex-col h-full w-full overflow-y-auto p-4 gap-4 rounded'>
            <div className='text-2xl font-bold text-center'>Subscription Plans</div>
            <div className='flex flex-col lg:flex-row gap-4'>
                {
                    plans.map((plan) => (
                        <PlanCard key={ plan.id } plan={ plan } theme={ theme } />
                    ))
                }
            </div>
        </div>
    )
}

const PlanCard = ({ plan, theme }) => {
    const navigate = useNavigate();
    const onClickPlan = () => {
        if (isUserLoggedIn()) {
            navigate(`/plans/${plan.id}`)
        } else {
            alertTrigger.emit('alert',
                'Please login to purchase the plan',
                null,
                () => navigate('/auth/user/login'),
                'btn-primary',
                'Login'
            )
        }
    }
    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.text, border: `1px solid ${plan.recommended ? 'gold' : theme.tertiary}` } } className={ `w-full lg:w-1/4 h-fit ${plan.recommended ? 'border-2 border-yellow-500 lg:scale-105' : ''} lg:hover:scale-105 transition-all duration-300` }>
            <div style={ { backgroundColor: theme.secondary } } className='h-32 lg:h-48 w-full flex justify-center items-center relative pt-2 px-2'>
                { plan.recommended && <div className='absolute -top-4 left-1/2 -translate-x-1/2 text-2xl text-yellow-500'><FaCrown /></div> }
                <img src={ plan.vectorImage } alt={ plan.name } className='w-full h-full object-contain' />
            </div>
            <div className='p-4 flex flex-col gap-2 items-center justify-center'>
                <div className='text-xl lg:text-2xl font-bold'>{ plan.name }</div>
                <div className='text-xl'>Only for { formatCurrency(plan.price) }</div>
                <div className='text-lg font-bold'>Benefits</div>
                <div className='flex flex-col gap-2 text-xs lg:text-base text-center'>
                    <div className=''>Hospital Visits: { plan.hospitalVisits }</div>
                    <div className=''>Doctor Consultations: { plan.doctorConsultations }</div>
                    <div className=''>OP Fee: { plan.opFee }</div>
                    <div className=''>Hidden Charges: { plan.hiddenCharges }</div>
                    <div className=''>Valid upto { plan.validUpto }</div>
                </div>
                <div className='text-sm my-2 w-full lg:hover:scale-105 transition-all duration-300'>
                    <Button label='Buy Now' style={ { width: '100%' } } onClick={ onClickPlan } />
                </div>
            </div>
        </div>
    )
}

export default withTheme(Plans)
