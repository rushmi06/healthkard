import React from 'react'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'

function ChangePassword({ setShowChangePassword, theme }) {
    return (
        <div
            style={ { backgroundColor: theme.textSecondary, color: theme.text, } }
            className='fixed bottom-0 left-64 transform -translate-y-1/2 gap-2 z-100 rounded shadow p-4 flex flex-col justify-between'
        >
            <div style={ { color: theme.primary } } className='text-xl font-semibold'>Change Password</div>
            <Input label='Old Password' type='password' />
            <Input label='New Password' type='password' />
            <div className='flex justify-between gap-2 w-full'>
                <Button label='Cancel' style={ { fontSize: '12px', minWidth: '100px' } } type='btn-secondary' onClick={ () => setShowChangePassword(false) } />
                <Button label='Change Password' style={ { fontSize: '12px', minWidth: '100px' } } onClick={ () => setShowChangePassword(false) } />
            </div>
        </div>
    )
}

export default withTheme(ChangePassword)
