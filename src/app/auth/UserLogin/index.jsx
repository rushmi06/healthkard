import React from 'react'
import Modal from '../../components/Modal'
import withTheme from '../../theme/Theme'
import Input from '../../components/Input'
import Button from '../../components/Button'
function UserLogin({ theme, open, onClose }) {
    return (
        <Modal open={ open } onClose={ onClose } style={ { width: '50%', height: '60%', overflow: 'hidden' } }>
            <div style={ { background: `linear-gradient(55deg, ${theme.senary} 55%, ${theme.primary} 45%)` } } className='w-full h-full flex '>
                <div className='user-login-left w-1/2 flex flex-col justify-center items-center gap-4 p-2'>
                    <Input label='Email' type='email' placeholder='Enter your email' style={ { width: '100%' } } inputStyle={ { width: '70%' } } />
                    <Input label='Password' type='password' placeholder='Enter your password' style={ { width: '100%' } } inputStyle={ { width: '70%' } } />
                    <div className='w-full flex justify-between'>
                        <button type='button' className='text-xs'>Forgot Password?</button>
                        <Button label='Login' />
                    </div>
                    <div className='w-full flex justify-between text-sm items-center gap-2 '>
                        Don't have an account? <Button label='Create an account' type='btn-secondary' />
                    </div>
                </div>
                <div style={ { color: theme.textSecondary } } className='w-1/2 p-10'>
                    <div className='text-4xl font-bold p-2 text-right'>Login</div>
                    <div className='text-xl font-bold text-right'>Welcome back!</div>
                    <div className='text-sm text-right'>Please enter your details</div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(UserLogin)
