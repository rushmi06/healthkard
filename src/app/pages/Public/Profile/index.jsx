import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import withTheme from '../../../theme/Theme'
import httpService from '../../../api/httpService'
import Button from '../../../components/Button'
import SideNavigationBar from './SideNavigationBar'
import Modal from '../../../components/Modal'
import { formatNumber } from '../../../utils/format'
import Select from '../../../components/Select'
import Healthkard from '../../../components/Healthkard'
import UserRenewal from '../../Registration/UserRenewal'
import { clearLocalStorage, getFromLocalStorage } from '../../../auth/localStorage'
import { Payments } from '../../Admin/Users/Detailed'
import profileImage from '../../../assets/profile.png'
import UnregisteredTrack from './UnregisteredTrack'
function Profile({ theme }) {
    const navigate = useNavigate()
    const [activeIndex, setActiveIndex] = useState(0)
    const { userId } = useParams()
    const [user, setUser] = useState({})
    const [healthKards, setHealthKards] = useState([])
    const [currentHealthKardId, setCurrentHealthKardId] = useState(0);
    const [isChangeHealthKardModalOpen, setIsChangeHealthKardModalOpen] = useState(false);
    const [unRegisteredUser, setUnRegisteredUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const number = localStorage.getItem('userNumber')
                const { users } = await httpService.get(`users/?number=${number}`)
                if (users.length === 0 || users[0]?.registered === false) {
                    let user = await httpService.get(`users/unregistered/${number}`)
                    if (user?.name === 'xyz') {
                        const userName = getFromLocalStorage('userName')
                        user = {
                            ...user,
                            name: userName
                        }
                        await httpService.put('users/unregistered', number, user)
                    }
                    setUnRegisteredUser(user)
                }
                setUser(users[0])
                setHealthKards(users)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [userId])

    useEffect(() => {
        setUser(healthKards[currentHealthKardId])
    }, [currentHealthKardId, healthKards])

    const handleChangeHealthKard = (selected) => {
        const healthKardId = selected.split(' - ')[1]
        const healthKardIndex = healthKards.findIndex(healthKard => healthKard?.healthId === healthKardId) || 0
        setCurrentHealthKardId(healthKardIndex)
        setUser(healthKards[healthKardIndex])
        setIsChangeHealthKardModalOpen(false)
    }

    const logout = () => {
        clearLocalStorage()
        navigate('/')
    }

    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='w-full h-full p-8'>
            <div style={ { backgroundColor: theme.primary } } className='w-full h-full rounded relative'>
                <div style={ { color: theme.textSecondary } } className='p-4 flex items-center justify-between gap-4'>
                    {/* profile */ }
                    <div className='flex items-center justify-start gap-4'>
                        <div className='flex items-center justify-center'>
                            <img src={ user?.image || unRegisteredUser?.image || profileImage } alt="profile" className='w-20 h-20 rounded-full' />
                        </div>
                        <div className=''>
                            <h1 className='text-2xl font-bold'>{ user?.name || unRegisteredUser?.name } <span className='text-sm font-normal'>({ user?.healthId || unRegisteredUser?.healthId })</span></h1>
                            <p className='text-sm'>{ user?.email || unRegisteredUser?.email } | { formatNumber(user?.number || unRegisteredUser?.number) }</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        { healthKards.length > 1 && <Button type='btn-tertiary' label='Change HealthKard' style={ { color: theme.textSecondary } } onClick={ () => setIsChangeHealthKardModalOpen(true) } /> }
                        { !unRegisteredUser && <Button label='Edit Profile' type='btn-secondary' style={ { backgroundColor: theme.senary, color: theme.text } } /> }
                        <Button label='Logout' type='btn-danger' onClick={ logout } />
                    </div>
                </div>
                {/* container */ }
                <div style={ { backgroundColor: theme.senary } } className='w-11/12 h-4/5 absolute bottom-1 right-1 rounded flex '>
                    <div className='w-1/6 h-full flex items-center justify-center'>
                        <SideNavigationBar theme={ theme } activeIndex={ activeIndex } setActiveIndex={ setActiveIndex } />
                    </div>
                    <div className='w-5/6 h-full flex items-center justify-center'>
                        { activeIndex === 0 && <>
                            { unRegisteredUser ? <UnregisteredTrack user={ user } setUser={ setUser } /> : <Healthkard user={ user } /> }
                        </> }
                        { activeIndex === 1 && <UserRenewal theme={ theme } user={ user } /> }
                        { activeIndex === 2 && <Payments payments={ user?.payments } theme={ theme } /> }
                        { activeIndex === 3 && <div>Coming Soon</div> }
                        { activeIndex === 4 && <div>Coming Soon</div> }
                    </div>
                </div>
            </div>
            <ChangeHealthKardModal theme={ theme } healthKards={ healthKards } handleChangeHealthKard={ handleChangeHealthKard } currentHealthKardId={ currentHealthKardId } isChangeHealthKardModalOpen={ isChangeHealthKardModalOpen } setIsChangeHealthKardModalOpen={ setIsChangeHealthKardModalOpen } />
        </div>
    )
}

const ChangeHealthKardModal = ({ theme, healthKards, handleChangeHealthKard, currentHealthKardId, isChangeHealthKardModalOpen, setIsChangeHealthKardModalOpen }) => {
    if (healthKards.length === 0) return null

    return (
        <Modal open={ isChangeHealthKardModalOpen } onClose={ () => setIsChangeHealthKardModalOpen(false) } style={ { height: '100px', width: '50%' } }>
            <div style={ { border: `2px solid ${theme.primary}` } } className='flex flex-col items-center justify-center gap-4 w-full h-full p-4'>
                <h1 className='text-2xl font-bold w-full '>Change HealthKard</h1>
                <Select label='Select HealthKard'
                    options={ healthKards.map(healthKard => healthKard?.name + ' - ' + healthKard?.healthId) }
                    style={ { width: '100%' } }
                    value={ healthKards[currentHealthKardId]?.name + ' - ' + healthKards[currentHealthKardId]?.healthId }
                    onChange={ handleChangeHealthKard } />
            </div>
        </Modal>
    )
}

export default withTheme(Profile)
