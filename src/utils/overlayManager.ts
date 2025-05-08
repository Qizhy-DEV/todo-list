import EventEmitter from 'events';

function createOverlayManager() {
    const eventEmitter = new EventEmitter();

    const onOpen = () => {
        eventEmitter.emit('onOpen', true);
    };

    const onClose = () => {
        eventEmitter.emit('onClose', false);
    };

    return {
        onOpen,
        onClose,
        on: eventEmitter.on.bind(eventEmitter),
        off: eventEmitter.off.bind(eventEmitter),
    };
}

const overlayManager = createOverlayManager();

export default overlayManager;
