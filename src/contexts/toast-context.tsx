'use client';
import '@/styles/toast.css';
import { ToastContextTypes, Toast } from '@/interfaces/toast';
import { createContext, useState } from 'react';
import ToastElement from '@/components/toast';

export const ToastContext = createContext<ToastContextTypes | null>(null);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = (toast: Omit<Toast, 'id'>) => {

    const { done, status, subtitle, title, duration } = toast;

    const newToast: Toast = {
      id: new Date().getTime().toString(),
      done,
      status,
      subtitle,
      title,
      duration,
    };

    setToasts((prev) => {
      return [...prev, newToast];
    });
  };

  const clear = (id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      <div id="toast">
        {toasts.map((toast) => (
          <ToastElement toast={toast} clear={clear} key={toast.id} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
