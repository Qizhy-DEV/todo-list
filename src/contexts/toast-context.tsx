'use client';
import '@/styles/toast.css';
import { ToastContextInterface, ToastInterface } from '@/interfaces/toast';
import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toast from '@/components/toast';

export const ToastContext = createContext<ToastContextInterface | null>(null);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastInterface[]>([]);

  const notify = (toast: ToastInterface) => {
    const newId = uuidv4();

    setToasts((prev) => [...prev, { ...toast, id: newId }]);

    setTimeout(() => {
      setToasts(prev => prev.map((item) => {
        if (item.id === newId) {
          return { ...item, done: true }
        }
        return item
      }))
    }, 4000);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const waitingElement = toasts.find(item => item.done === false)
      if (!waitingElement) {
        setToasts([])
      }
    }
  }, [toasts])

  const clear = (id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, notify, clear }}>
      <div id="toast">
        {toasts.map((toast, index) => (
          <Toast toast={toast} clear={clear} key={index} />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
