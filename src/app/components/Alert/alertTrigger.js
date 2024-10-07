import { EventEmitter } from 'events';

const alertEmitter = new EventEmitter();

export const alertTrigger = {
    emit: (type, message, onCancel, onProceed) => {
        alertEmitter.emit('alert', { type, message, onCancel, onProceed });
    },
    subscribe: (callback) => {
        alertEmitter.on('alert', callback);
    },
    unsubscribe: (callback) => {
        alertEmitter.off('alert', callback);
    },
};

export default alertTrigger;
