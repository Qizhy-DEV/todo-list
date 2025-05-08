import { EventEmitter } from 'events';
import { Toast } from '@/interfaces/toast';

function createToastManager() {
    const emitter = new EventEmitter();
    let toasts: Toast[] = [];

    const notify = (toast: Omit<Toast, 'id'>) => {
        const { done, status, subtitle, title, duration } = toast;
        const newToast: Toast = {
            id: new Date().getTime().toString(),
            done,
            status,
            subtitle,
            title,
            duration: duration + toasts.length * 2000,
        };
        toasts.push(newToast);
        emitter.emit('toastAdded', newToast);
    };

    const clear = (id: string) => {
        toasts = toasts.filter((item) => item.id !== id);
        emitter.emit('toastRemoved', id);
    };

    return {
        notify,
        clear,
        on: emitter.on.bind(emitter),
        off: emitter.off.bind(emitter),
    };
}

const toastManager = createToastManager();
export default toastManager;
