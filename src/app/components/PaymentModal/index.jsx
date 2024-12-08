import React, { useEffect } from 'react';
import Button from '../Button';

function PaymentModal({ url, onClose, onSuccess, onFailure, theme }) {
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.source === window && event.data.type === 'payment_response') {
                const status = event.data.status;
                if (status === 'success') {
                    onSuccess();
                } else {
                    onFailure();
                }
                onClose();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [onSuccess, onFailure, onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div style={ { backgroundColor: theme.senary } } className="p-4 rounded-lg w-[90%] h-[90%] flex flex-col items-center justify-between relative">
                <div className='w-full flex items-center justify-end gap-2'>
                    <Button onClick={ onClose } label='Close Payment' type='btn-danger' />
                </div>
                <iframe
                    src={ url }
                    className="w-11/12 h-5/6"
                    frameBorder="0"
                    title="Payment Gateway"
                    onLoad={ (e) => {
                        try {
                            const frameUrl = e.target.contentWindow.location.href;
                            if (frameUrl.includes('Payment successful')) {
                                window.postMessage({ type: 'payment_response', status: 'success' }, '*');
                            } else if (frameUrl.includes('Payment failed')) {
                                window.postMessage({ type: 'payment_response', status: 'failure' }, '*');
                            }
                        } catch (error) {
                            // Ignore cross-origin frame access errors
                        }
                    } }
                />
            </div>
        </div>
    );
}

export default PaymentModal;