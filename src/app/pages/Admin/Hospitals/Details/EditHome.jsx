import React from 'react'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import { types } from './constants'
import Modal from '../../../../components/Modal'
import { AiFillInfoCircle } from "react-icons/ai";
import { useTooltip } from '../../../../components/Tooltip'
import Tooltip from '../../../../components/Tooltip'

function EditHome({ theme, isOpen, setIsOpen, onChooseCategory }) {
    const { showTooltip } = useTooltip();


    const handleTooltip = (event, content) => {
        showTooltip(content, event.clientX, event.clientY);
    };

    return (
        <Modal position='right' open={ isOpen } onClose={ () => setIsOpen(false) }>
            <Tooltip />
            <div className='flex flex-col gap-4 text-sm h-full'>
                <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex p-2 gap-2 h-11 justify-between items-center '>
                    <div className='font-semibold'>Please select a category to update</div>
                    <Button label='Cancel' type='btn-secondary' onClick={ () => setIsOpen(false) } />
                </div>
                <div className='flex flex-wrap gap-6 p-2 h-2/3 items-center justify-center'>
                    {
                        types.map((item, index) => (
                            <div onClick={ () => onChooseCategory(item.type) } key={ index } style={ { hover: { backgroundColor: theme.primary } } } className='flex flex-col gap-2 items-center hover:cursor-pointer hover:scale-105 transition-all duration-300 w-24 p-2 rounded'>
                                <div style={ { backgroundColor: theme.primary, color: theme.textSecondary } } className='text-3xl h-16 w-16 rounded-full flex items-center justify-center'>{ item.icon }</div>
                                <div style={ { color: theme.primary } } className='flex items-center justify-between font-semibold capitalize w-full'>
                                    <div className=''>
                                        { item.type }
                                    </div>
                                    <div
                                        className='hover:cursor-pointer'
                                        onMouseEnter={ (event) => handleTooltip(event, item.tooltip) }
                                    >
                                        <AiFillInfoCircle className='text-sm' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(EditHome)
