import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import httpService from '../../../../api/httpService'
import withTheme from '../../../../theme/Theme'
import { formatCurrency, formatDate, formatNumber } from '../../../../utils/format'
import { IoIosMail, IoIosTrash, IoMdCall } from 'react-icons/io'
import Healthkard from '../../../../components/Healthkard'
import Button from '../../../../components/Button'
import Panel from '../../../../components/Panel'
import Input from '../../../../components/Input'

function Detailed({ theme }) {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await httpService.get(`users/user/${userId}`);
            setUser(response)
        }
        fetchData()
    }, [userId])

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='relative flex items-center text-sm flex-col gap-4 w-full h-full rounded '>
            <Header theme={ theme } user={ user } />
            <Content theme={ theme } user={ user } />
        </div>
    )
}

const Header = ({ theme, user }) => {
    return (
        <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex justify-between items-center p-2 w-full'>
            <div className='flex flex-row gap-4 w-full h-full'>
                <img src={ user?.image } alt={ user?.name } className='h-10 w-10 rounded-full' />
                <div className='flex flex-col h-full'>
                    <div style={ { color: theme.text } } className='flex itece font-semibold'>{ user?.name }</div>
                    <div style={ { color: theme.textTertiary } } className='text-xs'> { user?.address }, { user?.city }, { user?.pincode } </div>
                </div>
            </div>
            <div className='flex flex-col items-end gap-1'>
                <div className='flex items-center gap-2'>
                    <div className=''>{ formatNumber(user?.number) }</div>
                    <IoMdCall />
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''>{ user?.email }</div>
                    <IoIosMail />
                </div>
            </div>
        </div>
    )
}

const Content = ({ theme, user }) => {
    return (
        <div className='flex  w-full h-full p-2 gap-2'>
            <div className='flex flex-col w-[451.06px] h-full gap-2'>
                <Healthkard user={ user } />
                <div className='flex justify-between'>
                    <Button label='Delete User' type='btn-danger' icon={ IoIosTrash } iconPosition='right' />
                    <Button label='Share this kard via mail' icon={ IoIosMail } iconPosition='right' />
                </div>
            </div>
            <UserPanel theme={ theme } user={ user } />
        </div>
    )
}


const UserPanel = ({ theme, user }) => {
    const [selected, setSelected] = useState('Payments')

    return (
        <div className='flex flex-col flex-grow h-full gap-2'>
            <Panel header={ ['Payments', 'Visits', 'Edit User'] } body={ selected === 'Payments' ?
                <Payments theme={ theme } payments={ user?.payments } /> :
                selected === 'Visits' ?
                    <Visits theme={ theme } visits={ user?.visited } /> :
                    <EditUser theme={ theme } user={ user } />
            } onSelect={ (item) => setSelected(item) } />
        </div>
    )
}


export const Payments = ({ theme, payments }) => {
    return (
        <div className='flex flex-col w-full h-full overflow-y-scroll'>
            { payments?.map((payment, index) => (
                <div style={ { borderBottom: `1px solid ${theme.primary}`, backgroundColor: index % 2 === 0 ? '' : theme.secondary } } key={ index } className='flex items-center gap-2 p-2 justify-between '>
                    <div className='h-2 w-2 rounded-full' style={ { backgroundColor: payment.paymentStatus ? 'green' : 'red' } }></div>
                    <div className='flex flex-col justify-between w-1/5'>
                        <div>{ formatCurrency(payment.amount) }</div>
                        <div>{ payment.plan }</div>
                    </div>
                    <div className='w-1/5'>{ payment.transactionId ? payment.transactionId : 'Offline Payment' }</div>
                    <div className='w-1/5'>{ payment.agent }</div>
                    <div className='w-1/4'>{ formatDate(payment.issueDate) }</div>
                </div>
            )) }
            {
                payments?.length === 0 && <div className='flex items-center justify-center w-full h-full'>No payments found</div>
            }
        </div>
    )
}

const Visits = ({ theme, visits }) => {
    return (
        <div className='flex flex-col w-full h-full overflow-y-scroll'>
            {
                visits?.map((visit, index) => (
                    <div style={ { borderBottom: `1px solid ${theme.primary}`, backgroundColor: index % 2 === 0 ? '' : theme.secondary } } key={ index } className='flex justify-between items-center p-2'>
                        <div className='w-1/4'>{ visit.hospitalId }</div>
                        <div className='w-1/2'>{ visit.hospitalName }</div>
                        <div className='w-1/4 text-right'>{ formatDate(visit.lastVisit) }</div>
                    </div>
                ))
            }
        </div>
    )
}

const EditUser = ({ user: storedUser }) => {
    const [user, setUser] = useState(storedUser)
    const handleChange = (property, value) => {
        setUser({ ...user, [property]: value })
    }
    return (
        <div className='flex flex-col w-full h-full gap-2 p-2'>
            <Input label='Name' value={ user.name } onChange={ (value) => handleChange('name', value) } />
            <Input label='Date of Birth' value={ user.dob } onChange={ (value) => handleChange('dob', value) } />
            <Input label='Email' value={ user.email } onChange={ (value) => handleChange('email', value) } />
            <Input label='Phone' value={ user.number } onChange={ (value) => handleChange('number', value) } />
            <Input label='Address' value={ user.address } onChange={ (value) => handleChange('address', value) } />
            <Input label='City' value={ user.city } onChange={ (value) => handleChange('city', value) } />
            <Input label='Pincode' value={ user.pincode } onChange={ (value) => handleChange('pincode', value) } />
            <div className='flex justify-between'>
                <Button label='Cancel' type='btn-secondary' />
                <Button label='Save' type='btn-primary' />
            </div>
        </div>
    )
}

export default withTheme(Detailed)