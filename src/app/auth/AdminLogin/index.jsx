import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import withTheme from '../../theme/Theme'
import Logo from '../../components/Logo'
import toast from 'react-hot-toast'
import httpService from '../../api/httpService'
import { saveToLocalStorage, getFromLocalStorage } from '../localStorage'
import loginImage from '../../assets/vector/image1.jpg'
function AdminLogin({ theme }) {
    const [admin, setAdmin] = useState({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const login = async () => {
        setLoading(true)
        try {
            const response = await httpService.post('auth/admin-login', admin)
            if (response.status === 200) {
                saveToLocalStorage({ adminToken: response.token })
                toast.success(response.message)
                navigate('/admin/hospitals/approved')
            } else {
                toast.error('Invalid credentials')
            }

        } catch (error) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const token = getFromLocalStorage('adminToken')
        if (token) {
            navigate('/admin/hospitals/approved')
        }
    }, [])
    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='flex  justify-start items-center h-screen'>
            <div className='w-full lg:w-1/2 p-8 h-full flex flex-col '>
                <div className=''><Logo /></div>
                <div className='text-2xl font-bold mt-6'>Login to your account</div>
                <div className='flex flex-col gap-4 mt-10 mx-auto w-5/6 '>
                    <Input label='email' type='email' onChange={ (e) => setAdmin({ ...admin, email: e.target.value }) } />
                    <Input label='Password' type='password' onChange={ (e) => setAdmin({ ...admin, password: e.target.value }) } />
                    <Button label={ loading ? 'Logging in...' : 'Login' } isLoading={ loading } type='btn-primary' onClick={ login } />
                </div>
            </div>
            <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='hidden lg:block w-1/2 h-full'>
                <img src={ loginImage } alt='login' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default withTheme(AdminLogin)
