import React, { useEffect, useState } from 'react'
import withTheme from '../../../theme/Theme'
import Select from '../../../components/Select'
import { plans } from '../../constants'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import pay from '../../../utils/pay'
import { formatCurrency } from '../../../utils/format'
import httpService from '../../../api/httpService'

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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAgents = async () => {
            const agents = await httpService.get('agents')
            setAgents((prev) => ['Self', ...agents.map((agent) => agent.agentID + ' - ' + agent.name)])
        }
        fetchAgents()
    }, [user])

    const handlePay = async () => {
        setLoading(true)
        setError(null)

        try {
            await pay(user?.number, user?.healthId, plans.find((p) => p.name === plan)?.total, plan, agent, user?.name, 'renew')
        } catch (error) {
            console.error('Payment initiation failed:', error)
            setError('Failed to initiate payment. Please try again.')
        } finally {
            setLoading(false)
        }
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
            { error && <div className="text-red-500 text-sm">{ error }</div> }
            <Button
                label={ loading ? 'Processing...' : 'Pay and Renew' }
                onClick={ handlePay }
                disabled={ loading }
            />

        </div>
    )
}

export default withTheme(UserRenewal)
