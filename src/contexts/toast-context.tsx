'use client';
import '@/styles/toast.css';
import { Toast } from '@/interfaces/toast';
import { useEffect, useState } from 'react';
import ToastElement from '@/components/toast';
import toastManager from '@/utils/taskManager';

const ToastWrapper = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleToastAdded = (newToast: Toast) => {
      setToasts((prev) => [...prev, newToast]);
    };

    const handleToastRemoved = (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    toastManager.on('toastAdded', handleToastAdded);
    toastManager.on('toastRemoved', handleToastRemoved);

    return () => {
      toastManager.removeListener('toastAdded', handleToastAdded);
      toastManager.removeListener('toastRemoved', handleToastRemoved);
    };
  }, []);

  return (
    <div id="toast">
      {toasts.map((toast) => (
        <ToastElement toast={toast} clear={() => toastManager.clear(toast.id)} key={toast.id} />
      ))}
    </div>
  );
};

export default ToastWrapper;
