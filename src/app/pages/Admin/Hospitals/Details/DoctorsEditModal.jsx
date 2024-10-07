import React from 'react'
import Modal from '../../../../components/Modal'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
function DoctorsEditModal({ isOpen, setIsOpen, theme }) {
    return (
        <Modal open={ isOpen } position='left' onClose={ () => setIsOpen(false) }>
            <div className='flex flex-col gap-4 text-sm h-full'>
                <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex p-2 gap-2 h-11 justify-between items-center '>
                    <div className='font-semibold'>Edit Doctors Information</div>
                </div>
                <div className='flex flex-col gap-4 p-2 w-full h-4/5 justify-between'>
                    <div className='flex flex-col gap-2 h-4/5 overflow-y-scroll'>
                        <div className='text-md font-semibold'>Doctor 1</div>
                        <Input label='Name' />
                        <Input label='Email' />
                        <Input label='Phone' />
                    </div>

                    <div className='flex justify-between items-center'>
                        <Button label='Cancel' type='btn-secondary' onClick={ () => setIsOpen(false) } />
                        <Button label='Save' type='btn-primary' />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(DoctorsEditModal)
