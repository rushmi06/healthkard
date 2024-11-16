import React from 'react'
import Modal from '../../components/Modal'
import withTheme from '../../theme/Theme'
import Input from '../../components/Input'
import Button from '../../components/Button'
function UserSignup({ theme, open, onClose }) {
    return (
        <Modal open={ open } onClose={ onClose } style={ { width: '50%', height: '60%', overflow: 'hidden' } }>
            <div style={ { background: `linear-gradient(-55deg, ${theme.senary} 55%, ${theme.primary} 45%)` } } className='w-full h-full flex flex-row-reverse'>
                <div className='w-1/2 flex flex-col justify-center items-center gap-4 p-2'>
                    <Input label='Email' type='email' placeholder='Enter your email' style={ { width: '100%' } } inputStyle={ { width: '70%' } } />
                    <Input label='Password' type='password' placeholder='Enter your password' style={ { width: '100%' } } inputStyle={ { width: '70%' } } />
                    <div className='w-full flex justify-between'>
                        <Button label='Create Account' />
                    </div>
                    <div className='w-full flex justify-between text-sm items-center gap-2 '>
                        Already have an account? <Button label='Login' type='btn-secondary' />
                    </div>
                </div>
                <div style={ { color: theme.textSecondary } } className='w-1/2 p-10'>
                    <div className='text-4xl font-bold p-2 text-left'>Sign Up</div>
                    <div className='text-xl font-bold text-left'>Create an account!</div>
                    <div className='text-sm text-left'>Please enter your details</div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(UserSignup)
