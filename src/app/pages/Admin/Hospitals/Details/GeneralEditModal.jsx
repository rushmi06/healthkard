import React, { useEffect, useState } from 'react'
import Modal from '../../../../components/Modal'
import withTheme from '../../../../theme/Theme'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { useParams } from 'react-router-dom'
import httpService from '../../../../api/httpService'
function GeneralEditModal({ isOpen, setIsOpen, theme, setUpdateCount }) {
    const { hospitalId } = useParams();
    const [hospital, setHospital] = useState(null);

    useEffect(() => {
        const fetchHospital = async () => {
            try {
                const hospital = await httpService.get('hospitals/hospital', hospitalId);
                setHospital({
                    hospitalLegalName: hospital?.hospitalDetails?.hospitalLegalName,
                    hospitalNumber: hospital?.hospitalDetails?.hospitalNumber,
                    email: hospital?.email,
                    description: hospital?.mediaDetails?.desc
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

    const handleSave = async () => {
        try {
            await httpService.put(`hospitals/hospital/general`, hospitalId, hospital)
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
                    <div className='font-semibold'>Edit General Information</div>
                </div>
                <div className='flex flex-col gap-4 p-2 w-full h-4/5 justify-between'>
                    <div className='flex flex-col gap-2 h-4/5 overflow-y-scroll'>
                        <Input label='Hospital Legal Name' value={ hospital?.hospitalLegalName } onChange={ (event) => changeHandler('hospitalLegalName', event.target.value) } />
                        <Input label='Hospital Phone Number' value={ hospital?.hospitalNumber } onChange={ (event) => changeHandler('hospitalNumber', event.target.value) } />
                        <Input label='Hospital Email Address' value={ hospital?.email } onChange={ (event) => changeHandler('email', event.target.value) } />
                        <Input label='Hospital Description' multiline={ true } rows={ 5 } inputStyle={ { width: '100%' } } value={ hospital?.description } onChange={ (event) => changeHandler('description', event.target.value) } />
                    </div>

                    <div className='flex justify-between items-center'>
                        <Button label='Cancel' type='btn-secondary' onClick={ () => setIsOpen(false) } />
                        <Button label='Save' type='btn-primary' onClick={ handleSave } />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withTheme(GeneralEditModal)
