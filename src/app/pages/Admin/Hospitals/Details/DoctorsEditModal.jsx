import React, { useEffect, useState } from 'react'
import httpService from '../../../../api/httpService'
import Modal from '../../../../components/Modal'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { useParams } from 'react-router-dom'

function DoctorsEditModal({ isOpen, setIsOpen, theme, setUpdateCount }) {

    const [doctors, setDoctors] = useState([])
    const { hospitalId } = useParams();

    useEffect(() => {
        const fetchHospital = async () => {
            try {
                const hospital = await httpService.get('hospitals/hospital', hospitalId);
                setDoctors(hospital?.doctorList || [])
            } catch (error) {
                console.log(error)
            }
        }
        fetchHospital()
    }, [hospitalId])

    const onChangeHandler = (key, value, index) => {
        const newDoctors = [...doctors]
        newDoctors[index][key] = value
        setDoctors(newDoctors)
    }

    const onAddDoctorHandler = () => {
        setDoctors([...doctors, { name: '', email: '', number: '' }])
    }

    const onSaveHandler = async () => {
        try {
            await httpService.put(`hospitals/hospital/doctor`, hospitalId, doctors)
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
                    <div className='font-semibold'>Edit Doctors Information</div>
                    <Button label='Add Doctor' type='btn-primary' onClick={ onAddDoctorHandler } />
                </div>
                <div className='flex flex-col gap-4 p-2 w-full h-4/5 justify-between overflow-y-scroll'>
                    { doctors.map((doctor, index) => (
                        <div key={ index } className='flex flex-col gap-2 h-4/5'>
                            <div className='text-md font-semibold'>Doctor { index + 1 }</div>
                            <Input label='Name' value={ doctor.name } onChange={ (e) => onChangeHandler('name', e.target.value, index) } />
                            <Input label='Email' value={ doctor.email } onChange={ (e) => onChangeHandler('email', e.target.value, index) } />
                            <Input label='Phone' value={ doctor.number } onChange={ (e) => onChangeHandler('number', e.target.value, index) } />
                        </div>
                    )) }
                    <div className='flex justify-between items-center'>
                        <Button label='Cancel' type='btn-secondary' onClick={ () => setIsOpen(false) } />
                        <Button label='Save' type='btn-primary' onClick={ onSaveHandler } />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(DoctorsEditModal)
