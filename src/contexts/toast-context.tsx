'use client';
import '@/styles/toast.css';
import { ToastContextTypes, Toast } from '@/interfaces/toast';
import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastElement from '@/components/toast';

export const ToastContext = createContext<ToastContextTypes | null>(null);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const notify = (toast: Omit<Toast, 'id'>) => {
    console.log('call');

    // const newId = uuidv4();

    const { done, status, subtitle, title, duration } = toast;

    const newToast: Toast = {
      id: new Date().getTime().toString(),
      done,
      status,
      subtitle,
      title,
      duration,
    };

    console.log(toasts);

    setToasts((prev) => {
      console.log(prev);
      return [...prev, newToast];
    });
  };

  useEffect(() => {
    // if (toasts.length > 0) {
    //   const waitingElement = toasts.find(item => item.done === false)
    //   if (!waitingElement) {
    //     setToasts([])
    //   }
    // }
    console.log(toasts);
  }, [toasts]);

  const clear = (id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      <div id="toast">
        {toasts.map((toast, index) => (
          <ToastElement toast={toast} clear={clear} key={index} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
