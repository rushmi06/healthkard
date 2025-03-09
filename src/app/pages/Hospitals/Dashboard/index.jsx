import React, { useState } from 'react'
import Healthkard from '../../../components/Healthkard'
import useCustomEffect from '../../../hooks/customUseEffect'
import httpService from '../../../api/httpService'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import withTheme from '../../../theme/Theme'
function Dashboard({ theme }) {
    const userId = '66f3c2fc4143e01fba419cb9'
    const [user, setUser] = useState(null)
    useCustomEffect(() => {
        const fetchUser = async () => {
            const user = await httpService.get(`users/user/${userId}`)
            setUser(user)
        }
        fetchUser()
    }, [])
    return (
        <div className='flex flex-col items-center justify-center flex-1 w-full'>
            <div className='flex items-center gap-4 justify-center w-full p-4'>
                <Input type='text' placeholder='Search for a patient' inputStyle={ { width: '100%' } } style={ { width: '100%' } } />
                <Button label='Search' />
            </div>
            <div className='flex flex-col lg:flex-row justify-center w-full p-4 gap-2'>
                <Healthkard user={ user } />
                <PastHistory theme={ theme } />
            </div>
            <div className='flex items-center gap-4 justify-center w-full p-4'>
                <Button label='Cancel' type='btn-secondary' style={ { width: '100%' } } />
                <Button label='Add Patient' style={ { width: '100%' } } />
            </div>
        </div>
    )
}

export default withTheme(Dashboard)


const PastHistory = ({ theme }) => {
    return (
        <div style={ { color: theme.text } } className='flex flex-col items-center justify-center w-1/2 h-full border'>
            <h1 className='text-2xl font-bold'>Past history</h1>
        </div>
    )
}
