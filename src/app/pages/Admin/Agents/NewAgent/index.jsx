import React, { useState } from 'react'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Checkbox from '../../../../components/Checkbox'
import withTheme from '../../../../theme/Theme'
import { MOBILE_VERIFICATION_FOR_AGENT } from '../../../../utils/config'
import httpService from '../../../../api/httpService'
import toast from 'react-hot-toast'

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

    const [checkes, setCheckes] = useState({
        whatsapp: false,
        instagram: false,
        facebook: false,
        linkedin: false,
    })
    const [sendSocialMediaLinksLoading, setSendSocialMediaLinksLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
    })
    const [mobileVerified, setMobileVerified] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState(form.name.split(' ')[0]);
    const [lastName, setLastName] = useState(form.name.split(' ')[1]);

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const onSave = () => {
        if (confirmPassword !== form.password) {
            toast.error('Password and confirm password does not match')
            return
        }
        const agent = {
            name: `${firstName} ${lastName}`,
            email: form.email,
            number: form.number,
            password: form.password,
        }
        setForm(agent);
    }

    const onClear = () => {
        setForm({ ...form, name: '', email: '', number: '', password: '' })
        setCheckes({ ...checkes, whatsapp: false, instagram: false, facebook: false, linkedin: false })
        setMobileVerified(false)
        setConfirmPassword('')
        setFirstName('')
        setLastName('')
    }

    const sendSocialMediaLinks = async () => {
        if (!checkes.whatsapp && !checkes.instagram && !checkes.facebook && !checkes.linkedin) {
            toast.error('Confirm the social media links')
            return
        }
        if (!form.email) {
            toast.error('Email is required')
            return
        }
        setSendSocialMediaLinksLoading(true)
        try {
            const response = await httpService.post('emails/send-social-media-links-agent', { name: `${firstName} ${lastName}`, email: form.email })
            if (response.status === 200) {
                toast.success('Successfully send the message')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setSendSocialMediaLinksLoading(false)
        }
    }

    return (
        <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='flex gap-4 justify-between'>
                    <Input label='First Name' value={ firstName } placeholder='Enter first name' type='text' onChange={ (e) => setFirstName(e.target.value) } style={ { width: '45%' } } />
                    <Input label='Last Name' value={ lastName } placeholder='Enter last name' type='text' onChange={ (e) => setLastName(e.target.value) } style={ { width: '45%' } } />
                </div>
                <div className='flex gap-4 justify-start'>
                    <Input label='Email' value={ form.email } placeholder='Enter email' type='email' onChange={ (e) => handleChange('email', e.target.value) } style={ { width: '45%' } } />
                    <Button label='Verify' />
                </div>
                <div className='flex gap-4 justify-start'>
                    <Input label='Phone Number' type='number' value={ form.number } placeholder='Enter phone number' onChange={ (e) => handleChange('number', e.target.value) } style={ { width: '45%' } } />
                    { MOBILE_VERIFICATION_FOR_AGENT && <Button label={ mobileVerified ? 'Verified' : 'Verify' } onClick={ () => setMobileVerified(true) } /> }
                </div>
                {/* <div className='flex gap-4 justify-between'>
                    <Input label='Inform to' value={ form.informTo } placeholder='Enter inform to' type='text' onChange={ (e) => handleChange('informTo', e.target.value) } style={ { width: '45%' } } />
                </div> */}
                <div className='flex gap-4 justify-between'>
                    <Input label='Password' value={ form.password } placeholder='Enter password' type='password' onChange={ (e) => handleChange('password', e.target.value) } style={ { width: '45%' } } />
                    <Input label='Confirm Password' value={ confirmPassword } placeholder='Enter confirm password' type='password' onChange={ (e) => setConfirmPassword(e.target.value) } style={ { width: '45%' } } />
                </div>
                <div className='flex flex-col w-1/4 gap-4 justify-between'>
                    <Button label='Send links in the mail' onClick={ sendSocialMediaLinks } isLoading={ sendSocialMediaLinksLoading } />
                    <div className='flex flex-col gap-4 justify-between'>
                        <Checkbox label='Joined in WhatsApp group' checked={ checkes.whatsapp } onChange={ (e) => setCheckes({ ...checkes, whatsapp: e.target.checked }) } />
                        <Checkbox label='Fallowing on Instagram' checked={ checkes.instagram } onChange={ (e) => setCheckes({ ...checkes, instagram: e.target.checked }) } />
                        <Checkbox label='Fallowing on Facebook' checked={ checkes.facebook } onChange={ (e) => setCheckes({ ...checkes, facebook: e.target.checked }) } />
                        <Checkbox label='Fallowing on LinkedIn' checked={ checkes.linkedin } onChange={ (e) => setCheckes({ ...checkes, linkedin: e.target.checked }) } />
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <Button label='Draft' type='btn-tertiary' />
                <div className='flex gap-4'>
                    <Button label='Clear' type='btn-secondary' onClick={ onClear } />
                    <Button label='Save' type='btn-primary' onClick={ onSave } disabled={ !form.email || !form.number || !form.password || !confirmPassword || !checkes.whatsapp || !checkes.instagram || !checkes.facebook || !checkes.linkedin } />
                </div>
            </div>
        </div>
    )
}
