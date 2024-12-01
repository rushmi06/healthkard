import React, { useEffect, useState } from 'react'
import withTheme from '../../../theme/Theme'
import Select from '../../../components/Select'
import PaymentModal from '../../../components/PaymentModal'
import { plans } from '../../constants'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import httpService from '../../../api/httpService'
import { formatCurrency } from '../../../utils/format'

function UserRenewal({ theme, user }) {
    if (!user) return null
    return (
        <div style={ { backgroundColor: theme.senary } } className='flex flex-col justify-center items-center  w-full h-full'>
            <Renewal theme={ theme } user={ user } />
        </div>
    )
}


function Renewal({ theme, user }) {
    const [healthKards] = useState([user?.healthId])
    const [healthKard, setHealthKard] = useState(user?.healthId || 'HK1201231')
    const [plan, setPlan] = useState('Monthly')
    const [isReferred, setIsReferred] = useState(false)
    const [agents, setAgents] = useState(['Self'])
    const [agent, setAgent] = useState('Self')
    const [showPaymentModal, setShowPaymentModal] = useState(false)
    const [paymentUrl, setPaymentUrl] = useState('')

    useEffect(() => {
        const fetchAgents = async () => {
            const agents = await httpService.get('agents')
            setAgents((prev) => ['Self', ...agents.map((agent) => agent.agentID + ' - ' + agent.name)])
        }
        fetchAgents()
    }, [user])

    const handlePay = async () => {
        const amount = plans.find((p) => p.name === plan)?.total
        try {
            const response = await httpService.get(`pay/?number=${user?.number}&healthId=${user?.healthId}&amount=${amount}`)
            setPaymentUrl(response.data.paymentUrl)
            setShowPaymentModal(true)
        } catch (error) {
            console.error('Payment initiation failed:', error)
            // Add error handling here (e.g., show error toast)
        }
    }

    const handlePaymentSuccess = () => {
        // Handle successful payment (e.g., show success message, refresh user data)
        console.log('Payment successful')
    }

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className=' flex flex-col gap-4 lg:w-1/2 w-full lg:h-fit lg:min-h-96 h-full rounded p-4'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='text-xl font-semibold pb-4'>User Contact Details</div>
            <div className='flex-1 flex flex-col gap-4'>
                <Select label='Select HealthKard' options={ healthKards } value={ healthKard } onChange={ (healthKard) => setHealthKard(healthKard) } />
                <Select label='Select Plan' options={ plans.map((plan) => plan.name) } value={ plan } onChange={ (plan) => setPlan(plan) } />
                <Checkbox label='Are you referred by any agent?' onChange={ (e) => setIsReferred(e.target.checked) } checked={ isReferred } />
                { isReferred && <Select label='Select Agent' options={ agents } value={ agent } onChange={ (agent) => setAgent(agent) } /> }
            </div>
            <div className='flex justify-between'>
                <div className=''>
                    Total Amount<span className='text-[10px]'> (Includes GST)</span> :
                </div>
                <div className='font-semibold'>{ formatCurrency(plans.find((p) => p.name === plan)?.total || 0) }</div>
            </div>
            <Button label='Pay and Renew' onClick={ handlePay } />

            { showPaymentModal && (
                <PaymentModal
                    url={ paymentUrl }
                    onClose={ () => setShowPaymentModal(false) }
                    onSuccess={ handlePaymentSuccess }
                    theme={ theme }
                />
            ) }
        </div>
    )
}

export default withTheme(UserRenewal)
