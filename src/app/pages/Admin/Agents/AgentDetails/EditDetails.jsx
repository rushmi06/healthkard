import React, { useState } from 'react'
import withTheme from '../../../../theme/Theme';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
function EditDetails({ agent, theme }) {
    const [formData, setFormData] = useState(agent);
    const [changed, setChanged] = useState(false);
    const onChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value });
        setChanged(true);
    }

    const handleSave = () => {
        console.log(formData);
    }

    const handleDelete = () => {
        console.log('delete');
    }
    return (
        <div style={ { color: theme.text } } className='flex flex-col gap-4 p-2'>
            <Input label='Name' value={ formData?.name } onChange={ e => onChange(e, 'name') } />
            <Input label='Email' value={ formData?.email } onChange={ e => onChange(e, 'email') } />
            <Input label='Phone' value={ formData?.number } onChange={ e => onChange(e, 'number') } />
            <Input label='Password' value={ formData?.password } onChange={ e => onChange(e, 'password') } />
            <Input label='Set Healthkards Target' value={ formData?.healthkardsTarget } onChange={ e => onChange(e, 'healthkardsTarget') } />
            <Input label='Set Hospitals Target' value={ formData?.hospitalsTarget } onChange={ e => onChange(e, 'hospitalsTarget') } />
            <div className='flex justify-between gap-2'>
                <Button label='Delete' type='btn-danger' onClick={ handleDelete } />
                <div className='flex  gap-2'>
                    <Button label='Reset' type='btn-secondary' onClick={ () => setFormData(agent) } />
                    <Button label='Save' disabled={ !changed } onClick={ handleSave } />
                </div>
            </div>
        </div>
    )
}

export default withTheme(EditDetails);
