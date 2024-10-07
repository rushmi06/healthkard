import React, { useState, useEffect } from 'react';
import { emailBoxTrigger } from './emailBoxTrigger';
import withTheme from '../../theme/Theme';
import Input from '../Input';
import Button from '../Button';

const EmailBox = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [onCancel, setOnCancel] = useState(null);
    const [onSend, setOnSend] = useState(null);

    useEffect(() => {
        const handleEmailBox = ({ email, description, onCancel, onSend }) => {
            setIsOpen(true);
            setEmail(email);
            setDescription(description);
            setOnCancel(() => onCancel);
            setOnSend(() => onSend);
        };

        emailBoxTrigger.subscribe(handleEmailBox);

        return () => {
            emailBoxTrigger.unsubscribe(handleEmailBox);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        if (onCancel) onCancel();
    };

    const handleSend = () => {
        setIsOpen(false);
        if (onSend) onSend(description);
    };

    if (!isOpen) return null;

    return (
        <div style={ { backgroundColor: theme.senary, color: theme.text } } className="flex flex-col p-4 rounded-lg shadow-lg gap-2 justify-between fixed bottom-0 right-0 z-20  h-96 w-80">
            <div className='text-xs'>{ email }</div>
            <Input
                type='text'
                placeholder='Enter your message'
                value={ description }
                onChange={ (value) => setDescription(value) }
                multiline={ true }
                rows={ 10 }
                style={ { width: '100%', height: '100%' } }
                inputStyle={ { width: '100%', height: '100%' } }
            />
            <div className="flex justify-between items-center">
                <Button label='Close' onClick={ handleClose } type='btn-secondary' />
                <Button label='Send' onClick={ handleSend } type='btn-primary' />
            </div>
        </div>
    );
};

export default withTheme(EmailBox);
