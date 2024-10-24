import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Modal from '../../../../components/Modal'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import httpService from '../../../../api/httpService'

function OwnerEditModal({ isOpen, setIsOpen, setUpdateCount, theme }) {
    const { hospitalId } = useParams();
    const [hospital, setHospital] = useState(null);

    useEffect(() => {
        const fetchHospital = async () => {
            try {
                const hospital = await httpService.get('hospitals/hospital', hospitalId);
                setHospital({
                    name: hospital?.hospitalDetails?.hospitalOwnerFullName,
                    email: hospital?.hospitalDetails?.hospitalOwnerEmail,
                    phone: hospital?.hospitalDetails?.hospitalOwnerContactNumber
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchHospital()
    }, [hospitalId])

    const changeHandler = (name, value) => {
        setHospital({ ...hospital, [name]: value })
    }
    const saveHandler = async () => {
        try {
            await httpService.put(`hospitals/hospital/owner`, hospitalId, hospital)
            setUpdateCount(prev => prev + 1)
            setIsOpen(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal open={ isOpen } position='left' onClose={ () => setIsOpen(false) }>
            <div className='flex flex-col gap-4 text-sm h-full'>
                <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='flex p-2 gap-2 h-11 justify-between items-center '>
                    <div className='font-semibold'>Edit Owner Information</div>
                </div>
                <div className='flex flex-col gap-4 p-2 w-full h-4/5 justify-between'>
                    <div className='flex flex-col gap-2 h-4/5 overflow-y-scroll'>
                        <Input label='Name' value={ hospital?.name } onChange={ (e) => changeHandler('name', e.target.value) } />
                        <Input label='Email' value={ hospital?.email } onChange={ (e) => changeHandler('email', e.target.value) } />
                        <Input label='Phone' value={ hospital?.phone } onChange={ (e) => changeHandler('phone', e.target.value) } />
                    </div>

                    <div className='flex justify-between items-center'>
                        <Button label='Cancel' type='btn-secondary' onClick={ () => setIsOpen(false) } />
                        <Button label='Save' type='btn-primary' onClick={ saveHandler } />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(OwnerEditModal)
