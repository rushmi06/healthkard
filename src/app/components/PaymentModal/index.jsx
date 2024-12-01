import React, { useEffect } from 'react';

function PaymentModal({ url, onClose, onSuccess, theme }) {
    useEffect(() => {
        const handleMessage = (event) => {
            if (event.data.type === 'payment_status') {
                if (event.data.status === 'success') {
                    onSuccess();
                }
                onClose();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [onSuccess, onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div style={ { backgroundColor: theme.secondary } } className="p-4 rounded-lg w-[90%] h-[90%] relative">
                <button
                    onClick={ onClose }
                    style={ { color: theme.primary } }
                    className="absolute top-2 right-2 hover:opacity-70"
                >
                    ✕
                </button>
                <iframe
                    src={ url }
                    className="w-full h-full"
                    frameBorder="0"
                    title="Payment Gateway"
                />
            </div>
        </div>
    );
}

export default PaymentModal;