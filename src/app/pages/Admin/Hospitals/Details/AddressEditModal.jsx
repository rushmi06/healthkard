import React, { useEffect, useState } from 'react'
import Modal from '../../../../components/Modal'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { useParams } from 'react-router-dom'
import httpService from '../../../../api/httpService'

function AddressEditModal({ isOpen, setIsOpen, setUpdateCount, theme }) {
    const [address, setAddress] = useState({})
    const { hospitalId } = useParams();
    useEffect(() => {
        const fetchHospital = async () => {
            try {
                const hospital = await httpService.get('hospitals/hospital', hospitalId);
                setAddress(hospital?.hospitalDetails?.address || {})
            } catch (error) {
                console.log(error)
            }
        }
        fetchHospital()
    }, [hospitalId])
    const onChangeHandler = (key, value) => {
        setAddress({ ...address, [key]: value })
    }

    const onSaveHandler = async () => {
        try {
            await httpService.put(`hospitals/hospital/address`, hospitalId, address)
            setIsOpen(false)
            setUpdateCount(prev => prev + 1)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal open={ isOpen } position='left' onClose={ () => setIsOpen(false) }>
            <div className='flex flex-col gap-4 text-sm h-full'>
                <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex p-2 gap-2 h-11 justify-between items-center '>
                    <div className='font-semibold'>Edit Address Information</div>
                </div>
                <div className='flex flex-col gap-4 p-2 w-full h-4/5 justify-between'>
                    <div className='flex flex-col gap-2 h-4/5 overflow-y-scroll'>
                        <Input label='Street' value={ address.street } onChange={ (e) => onChangeHandler('street', e.target.value) } />
                        <Input label='Landmark' value={ address.landmark } onChange={ (e) => onChangeHandler('landmark', e.target.value) } />
                        <Input label='City' value={ address.city } onChange={ (e) => onChangeHandler('city', e.target.value) } />
                        <Input label='State' value={ address.state } onChange={ (e) => onChangeHandler('state', e.target.value) } />
                        <Input label='Country' value={ address.country } onChange={ (e) => onChangeHandler('country', e.target.value) } />
                        <Input label='Postal Code' value={ address.code } onChange={ (e) => onChangeHandler('code', e.target.value) } />
                        <Input label='Latitude' value={ address.lat } onChange={ (e) => onChangeHandler('lat', e.target.value) } />
                        <Input label='Longitude' value={ address.lng } onChange={ (e) => onChangeHandler('lng', e.target.value) } />
                    </div>

                    <div className='flex justify-between items-center'>
                        <Button label='Cancel' type='btn-secondary' onClick={ () => setIsOpen(false) } />
                        <Button label='Save' type='btn-primary' onClick={ onSaveHandler } />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(AddressEditModal)
