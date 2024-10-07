import { EventEmitter } from 'events';

const tooltipEmitter = new EventEmitter();

export const tooltipTrigger = {
    emit: (content, x, y) => {
        tooltipEmitter.emit('tooltip', { content, x, y });
    },
    subscribe: (callback) => {
        tooltipEmitter.on('tooltip', callback);
    },
    unsubscribe: (callback) => {
        tooltipEmitter.off('tooltip', callback);
    },
    hide: () => {
        tooltipEmitter.emit('hide');
    }
};

export default tooltipTrigger;