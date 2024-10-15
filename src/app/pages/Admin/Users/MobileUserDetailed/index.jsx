import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import httpService from '../../../../api/httpService'
import withTheme from '../../../../theme/Theme'
import { formatDate, formatNumber } from '../../../../utils/format'
import { IoIosMail, IoIosTrash, IoMdCall } from 'react-icons/io'
import MobileKard from './MobileKard'
import Button from '../../../../components/Button'

function MobileUserDetailed({ theme }) {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await httpService.get(`mobile/${userId}`);
                setUser(response)
            } catch (error) {
                console.error('Error fetching user:', error);
            }
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
            <div className='flex flex-row gap-4 w-full'>
                <div style={ { color: theme.text } } className='flex itece font-semibold'>{ user?.name }</div>
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

const Content = ({ user, theme }) => {
    return (
        <div className='flex  w-full h-full p-2 gap-2'>
            <div className='flex flex-col w-[451.06px] h-full gap-2'>
                <MobileKard user={ user } />
                <div className='flex justify-center'>
                    <Button label='Delete User' type='btn-danger' icon={ IoIosTrash } iconPosition='right' />
                </div>
            </div>
            <Healthkards number={ user?.number } theme={ theme } />
        </div>
    )
}


const Healthkards = ({ number, theme }) => {
    const navigate = useNavigate()

    const [healthkards, setHealthkards] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await httpService.get(`users/?number=${number}`)
                setHealthkards(response?.users)
            } catch (error) {
                console.error('Error fetching healthkards:', error);
            }
        }
        fetchData()
    }, [number])
    return (
        <div className='flex flex-col w-1/2 h-full gap-2 overflow-y-scroll'>
            <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='font-semibold'>Healthkards</div>
            { healthkards.map((healthkard) => (
                <div onClick={ () => navigate(`/admin/users/details/${healthkard._id}`) } style={ { borderBottom: `1px solid ${theme.primary}` } } key={ healthkard._id } className='flex flex-row justify-between items-center p-2 cursor-pointer'>
                    <div className='flex flex-row gap-2'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200'>
                            <img src={ healthkard?.image } alt='healthkard' className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='flex flex-col'>
                            <div>{ healthkard?.name }</div>
                            <div>{ healthkard?.healthId }</div>
                        </div>
                    </div>
                    <div>{ formatDate(healthkard?.expireDate) }</div>
                </div>
            )) }
        </div>
    )
}

export default withTheme(MobileUserDetailed)