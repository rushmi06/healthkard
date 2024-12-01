import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import withTheme from '../../theme/Theme'
import Logo from '../../components/Logo'
import toast from 'react-hot-toast'
import httpService from '../../api/httpService'
import signupImage from '../../assets/signup.jpg'

function UserSignup({ theme }) {
    const navigate = useNavigate()
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)
    const signup = async () => {
        setLoading(true)
        if (user?.name?.length === 0) {
            toast.error('Name is required')
            setLoading(false)
            return
        }
        if (user?.password !== user?.confirmPassword) {
            toast.error('Passwords do not match')
            setLoading(true)
            return
        }
        if (user?.number?.length !== 10) {
            toast.error('Invalid phone number')
            setLoading(false)
            return
        }
        if (user?.email?.length === 0 || !user?.email?.includes('@')) {
            toast.error('Invalid email')
            setLoading(false)
            return
        }
        if (user?.password?.length < 8) {
            toast.error('Password must be at least 8 characters long')
            setLoading(false)
            return
        }
        try {
            const response = await httpService.post('auth/new-user', user)
            if (response.status !== 200) {
                toast.error(response.message)
            } else {
                toast.success(response.message)
            }
        } catch (error) {
            toast.error('Please try again later')
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (key, value) => {
        setUser({ ...user, [key]: value })
    }

    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='flex flex-row-reverse h-screen overflow-y-scroll justify-start items-center'>
            <div className='w-full lg:w-1/2 p-8 h-full flex flex-col '>
                <div className=''><Logo /></div>
                <div className='text-2xl font-bold mt-6'>Create your account</div>
                <div className='flex flex-col gap-4 mt-10 mx-auto w-5/6 '>
                    <Input label='Name' type='text' onChange={ (e) => handleChange('name', e.target.value) } />
                    <Input label='Email' type='email' onChange={ (e) => handleChange('email', e.target.value) } />
                    <Input label='Phone Number' type='number' onChange={ (e) => handleChange('number', e.target.value) } />
                    <Input label='Password' type='password' onChange={ (e) => handleChange('password', e.target.value) } />
                    <Input label='Confirm Password' type='password' onChange={ (e) => handleChange('confirmPassword', e.target.value) } />
                    <Button label={ loading ? 'Signing up...' : 'Sign up' } isLoading={ loading } type='btn-primary' onClick={ signup } />
                    <div className='flex items-center justify-center gap-4'>
                        <div className='h-[1px] bg-gray-400 w-1/2'></div>
                        <div>or</div>
                        <div className='h-[1px] bg-gray-400 w-1/2'></div>
                    </div>
                    <Button label='Login' type='btn-secondary' onClick={ () => navigate('/auth/user/login') } />
                </div>
            </div>
            <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='hidden lg:block w-1/2 h-full'>
                <img src={ signupImage } alt='signup' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default withTheme(UserSignup)
