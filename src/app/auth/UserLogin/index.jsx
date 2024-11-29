import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import withTheme from '../../theme/Theme'
import Logo from '../../components/Logo'

function UserLogin({ theme }) {
    const navigate = useNavigate()

    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className='flex  justify-start items-center h-screen'>
            <div className='w-full lg:w-1/2 p-8 h-full flex flex-col '>
                <div className=''><Logo /></div>
                <div className='text-2xl font-bold mt-6'>Login to your account</div>
                <div className='flex flex-col gap-4 mt-10 mx-auto w-5/6 '>
                    <Input label='Email' type='email' />
                    <Input label='Password' type='password' />
                    <Button label='Login' type='btn-primary' />
                    <div className='flex items-center justify-center gap-4'>
                        <div className='h-[1px] bg-gray-400 w-1/2'></div>
                        <div>or</div>
                        <div className='h-[1px] bg-gray-400 w-1/2'></div>
                    </div>
                    <Button label='Sign up' type='btn-secondary' onClick={ () => navigate('/auth/user/signup') } />
                </div>
            </div>
            <div style={ { backgroundColor: theme.secondary, color: theme.text } } className='hidden lg:block w-1/2 h-full'></div>
        </div>
    )
}

export default withTheme(UserLogin)
