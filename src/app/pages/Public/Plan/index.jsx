import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import withTheme from '../../../theme/Theme'
import { PaymentDetails } from '../../Registration/NewUser'
import { plans } from '../../constants'
import pay from '../../../utils/pay'
import { getFromLocalStorage } from '../../../auth/localStorage'
import Select from '../../../components/Select'
import httpService from '../../../api/httpService'
import Button from '../../../components/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Loader from '../../../components/Loader'

function Plan({ theme }) {
    const { planId } = useParams();
    const navigate = useNavigate()
    const number = localStorage.getItem('userNumber')
    const userId = localStorage.getItem('userToken')
    const [selectedPlan, setSelectedPlan] = useState(plans.find(plan => plan.id === parseInt(planId)))
    const [healthKards, setHealthKards] = useState([])
    const [agents, setAgents] = useState([]);
    const [agent, setAgent] = useState('Self');
    const [currentHealthKardId, setCurrentHealthKardId] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchHealthKards = async () => {
            setIsLoading(true)
            try {
                const { users } = await httpService.get(`users/?number=${number}`)
                setHealthKards(users)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        const fetchAgents = async () => {
            setIsLoading(true)
            try {
                const agents = await httpService.get(`agents`)
                setAgents(agents.map(agent => agent?.name + ' - ' + agent?.agentID))
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchHealthKards()
        fetchAgents()
    }, [number])

    const handleChangeHealthKard = (selected) => {
        const healthKardId = selected.split(' - ')[1]
        const healthKardIndex = healthKards.findIndex(healthKard => healthKard?.healthId === healthKardId) || 0
        setCurrentHealthKardId(healthKardIndex)
    }

    const onPay = async () => {
        const data = {
            number: number || '',
            healthId: healthKards[currentHealthKardId]?.healthId || '',
            amount: selectedPlan.total,
            plan: selectedPlan.name,
            agent: agent === 'Self' ? agent : agent.split(' - ')[1],
            userName: getFromLocalStorage('userName') || '',
            type: 'renewal'
        }
        await pay(...Object.values(data))
    }
    if (isLoading) {
        return <div className='w-full h-full flex items-center justify-center'>
            <Loader />
        </div>
    }
    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='w-full h-full flex flex-col gap-4 justify-center items-center p-4'>
            <div className='flex flex-col  lg:flex-row gap-4 w-full'>
                { !selectedPlan && <div className='w-full lg:w-1/2'>
                    <Select label='Select Plan' options={ plans.map(plan => plan?.name) } value={ selectedPlan?.name || plans[planId]?.name } onChange={ plan => setSelectedPlan(plans.find(p => p.name === plan)) } />
                </div> }
                { healthKards.length > 0 ?
                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        <Select label='Select Healthkard'
                            options={ healthKards.map(healthKard => healthKard?.name + ' - ' + healthKard?.healthId) }
                            style={ { width: '100%' } }
                            value={ healthKards[currentHealthKardId]?.name + ' - ' + healthKards[currentHealthKardId]?.healthId }
                            onChange={ handleChangeHealthKard } />
                        <Select label='Select Agent'
                            options={ agents }
                            style={ { width: '100%' } }
                            value={ agent }
                            onChange={ (agent) => setAgent(agent) } />
                    </div>
                    : <div className='w-full h-full flex items-center justify-center'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <div className='text-2xl font-bold'>No Healthkards Found</div>
                            <div className='text-sm text-gray-500'>Please add a Healthkard to continue</div>
                            <Button label='Go to Profile to add Healthkard' icon={ IoMdArrowRoundForward } iconPosition='right' onClick={ () => navigate(`/profile/${userId}`) } />
                        </div>
                    </div> }
            </div>
            { selectedPlan && healthKards.length > 0 && <div className='flex flex-col gap-4 w-full'>
                <PaymentDetails theme={ theme } selectedPlan={ selectedPlan } onChangePlan={ () => setSelectedPlan(null) } icon={ IoMdArrowRoundForward } onOnlinePayment={ true } onPay={ onPay } />
            </div> }
        </div>
    )
}

export default withTheme(Plan)
