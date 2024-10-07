import React, { useState, useEffect } from 'react';
import alertTrigger from './alertTrigger';
import Button from '../Button';
import withTheme from '../../theme/Theme';

const Alert = ({ theme }) => {
    const [alertState, setAlertState] = useState({ isOpen: false, title: '', message: '', onCancel: null, onProceed: null });

    useEffect(() => {
        const handleAlert = ({ type, message, onCancel, onProceed }) => {
            setAlertState({ isOpen: true, title: type, message, onCancel, onProceed });
        };

        alertTrigger.subscribe(handleAlert);

        return () => {
            alertTrigger.unsubscribe(handleAlert);
        };
    }, []);

    const handleCancel = () => {
        setAlertState({ ...alertState, isOpen: false });
        if (alertState.onCancel) alertState.onCancel();
    };

    const handleProceed = () => {
        setAlertState({ ...alertState, isOpen: false });
        if (alertState.onProceed) alertState.onProceed();
    };

    if (!alertState.isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
            <div style={ { backgroundColor: theme.senary, color: theme.text } } className="flex flex-col p-4 rounded-lg shadow-lg gap-2 w-96 h-48 justify-between">
                <div className='text-lg font-bold'>{ alertState.title }</div>
                <div className='text-sm'>{ alertState.message }</div>
                <div className='w-full flex justify-between'>
                    <Button onClick={ handleCancel } label='Cancel' type='btn-secondary' />
                    <Button onClick={ handleProceed } label='Proceed' type='btn-danger' />
                </div>
            </div>
        </div>
    );
};

export default withTheme(Alert);
