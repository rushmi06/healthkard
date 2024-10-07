import React from 'react'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Checkbox from '../../../../components/Checkbox'
import withTheme from '../../../../theme/Theme'

function NewAgent({ theme }) {
    return (
        <div className='flex flex-col gap-4 w-full h-full'>
            <div style={ { backgroundColor: theme.secondary } } className='flex flex-col flex-grow rounded overflow-y-scroll h-full p-4'>
                <Form />
            </div>
        </div>
    )
}

export default withTheme(NewAgent);

function Form() {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex gap-4 justify-between'>
                    <Input label='First Name' placeholder='Enter first name' type='text' onChange={ () => { } } style={ { width: '45%' } } />
                    <Input label='Last Name' placeholder='Enter last name' type='text' onChange={ () => { } } style={ { width: '45%' } } />
                </div>
                <div className='flex gap-4 justify-start'>
                    <Input label='Email' placeholder='Enter email' type='email' onChange={ () => { } } style={ { width: '45%' } } />
                    <Button label='Verify' />
                </div>
                <div className='flex gap-4 justify-start'>
                    <Input label='Phone Number' placeholder='Enter phone number' type='text' onChange={ () => { } } style={ { width: '45%' } } />
                    <Button label='Verify' />
                </div>
                <div className='flex gap-4 justify-between'>
                    <Input label='Inform to' placeholder='Enter inform to' type='text' onChange={ () => { } } style={ { width: '45%' } } />
                </div>
                <div className='flex gap-4 justify-between'>
                    <Input label='Password' placeholder='Enter password' type='password' onChange={ () => { } } style={ { width: '45%' } } />
                    <Input label='Confirm Password' placeholder='Enter confirm password' type='password' onChange={ () => { } } style={ { width: '45%' } } />
                </div>
                <div className='flex flex-col w-1/4 gap-4 justify-between'>
                    <Button label='Send links in the mail' />
                    <div className='flex flex-col gap-4 justify-between'>
                        <Checkbox label='Joined in WhatsApp group' />
                        <Checkbox label='Fallowing on Instagram' />
                        <Checkbox label='Fallowing on Facebook' />
                        <Checkbox label='Fallowing on LinkedIn' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <Button label='Draft' type='btn-tertiary' />
                <div className='flex gap-4'>
                    <Button label='Clear' type='btn-secondary' />
                    <Button label='Save' type='btn-primary' />
                </div>
            </div>
        </div>
    )
}
