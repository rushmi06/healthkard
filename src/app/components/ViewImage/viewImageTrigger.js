import { EventEmitter } from 'events';

const viewImageEmitter = new EventEmitter();

export const viewImageTrigger = {
    emit: (image, header) => {
        viewImageEmitter.emit('viewImage', { image, header });
    },
    subscribe: (callback) => {
        viewImageEmitter.on('viewImage', callback);
    },
    unsubscribe: (callback) => {
        viewImageEmitter.off('viewImage', callback);
    },
};

export default viewImageTrigger;
