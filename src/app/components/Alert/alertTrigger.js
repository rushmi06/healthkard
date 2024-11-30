import { EventEmitter } from 'events';

const alertEmitter = new EventEmitter();

export const alertTrigger = {
    emit: (type, message, onCancel, onProceed, primaryBtnColor, primaryBtnText) => {
        alertEmitter.emit('alert', { type, message, onCancel, onProceed, primaryBtnColor, primaryBtnText });
    },
    subscribe: (callback) => {
        alertEmitter.on('alert', callback);
    },
    unsubscribe: (callback) => {
        alertEmitter.off('alert', callback);
    },
};

export default alertTrigger;
