import React from 'react'
import Button from '../../../../../components/Button'

function Footer() {
    return (
        <div className='flex justify-between px-4 py-2'>
            <Button label='Close' type='btn-tertiary' />
            <div className='flex gap-2'>
                <Button label='Clear' type='btn-secondary' />
                <Button label='Save' type='btn-primary' />
            </div>
        </div>
    )
}

export default Footer
