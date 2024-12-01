import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import withTheme from '../../theme/Theme'
import Logo from '../../components/Logo'
import toast from 'react-hot-toast'
import httpService from '../../api/httpService'
import { saveToLocalStorage } from '../localStorage'
import loginImage from '../../assets/login.jpg'
function UserLogin({ theme }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const login = async () => {
        setLoading(true)
        if (user?.number?.length !== 10) {
            toast.error('Invalid phone number')
            setLoading(false)
            return
        }
        if (user?.password?.length === 0) {
            toast.error('Password is required')
            setLoading(false)
            return
        }
        try {
            const response = await httpService.post('auth/user-login', user)
            if (response.status === 200) {
                saveToLocalStorage({ userToken: response.id, userEmail: response.email, userNumber: user.number, userName: response.name })
                toast.success(response.message)
                navigate('/')
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='flex  justify-start items-center h-screen'>
            <div className='w-full lg:w-1/2 p-8 h-full flex flex-col '>
                <div className=''><Logo /></div>
                <div className='text-2xl font-bold mt-6'>Login to your account</div>
                <div className='flex flex-col gap-4 mt-10 mx-auto w-5/6 '>
                    <Input label='Number' type='number' onChange={ (e) => setUser({ ...user, number: e.target.value }) } />
                    <Input label='Password' type='password' onChange={ (e) => setUser({ ...user, password: e.target.value }) } />
                    <Button label={ loading ? 'Logging in...' : 'Login' } isLoading={ loading } type='btn-primary' onClick={ login } />
                    <div className='flex items-center justify-center gap-4'>
                        <div className='h-[1px] bg-gray-400 w-1/2'></div>
                        <div>or</div>
                        <div className='h-[1px] bg-gray-400 w-1/2'></div>
                    </div>
                    <Button label='Sign up' type='btn-secondary' onClick={ () => navigate('/auth/user/signup') } />
                </div>
            </div>
            <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='hidden lg:block w-1/2 h-full'>
                <img src={ loginImage } alt='login' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default withTheme(UserLogin)
