import { EventEmitter } from 'events';
import { Toast } from '@/interfaces/toast';

class ToastManager extends EventEmitter {
  private toasts: Toast[] = [];

  notify(toast: Omit<Toast, 'id'>) {
    const { done, status, subtitle, title, duration } = toast;
    const newToast: Toast = {
      id: new Date().getTime().toString(),
      done,
      status,
      subtitle,
      title,
      duration: duration + this.toasts.length * 1500,
    };
    this.emit('toastAdded', newToast);
  }

  clear(id: string) {
    this.toasts = this.toasts.filter((item) => item.id !== id);
    this.emit('toastRemoved', id);
  }
}

const toastManager = new ToastManager();
export default toastManager;
