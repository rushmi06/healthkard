import { EventEmitter } from 'events';

const emailBoxEmitter = new EventEmitter();

export const emailBoxTrigger = {
    emit: (email, description, onCancel, onSend) => {
        emailBoxEmitter.emit('emailBox', { email, description, onCancel, onSend });
    },
    subscribe: (callback) => {
        emailBoxEmitter.on('emailBox', callback);
    },
    unsubscribe: (callback) => {
        emailBoxEmitter.off('emailBox', callback);
    },
};

export default emailBoxTrigger;
