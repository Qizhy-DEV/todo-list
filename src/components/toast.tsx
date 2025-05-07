import { StatusToast, ToastInterface } from '@/interfaces/toast';
import React from 'react';

const Toast = ({ toast, clear }: { toast: ToastInterface; clear: (id: string) => void }) => {
  const toastIcons = {
    [StatusToast.SUCCESS]: 'fa-check',
    [StatusToast.WARNING]: 'fa-exclamation',
    [StatusToast.FAIL]: 'fa-circle-exclamation',
  };

  return (
    <div
      key={toast.subtitle}
      style={{ height: toast.done ? 0 : '70px' }}
      className={`toast toast--${toast.status}`}
    >
      <div className={`toast__status-line toast__status-line--${toast.status}`} />
      <div className={`toast__status toast__status--${toast.status}`}>
        <i className={`fa-solid ${toastIcons[toast.status]}`}></i>
      </div>
      <div className="toast__info">
        <span className="toast__info__title">{toast.title}</span>
        <span className="toast__info__subtitle">{toast.subtitle}</span>
      </div>
      <button
        onClick={() => clear(toast.id as string)}
        className="toast__btn__close fa-solid fa-xmark"
      />
    </div>
  );
};

export default Toast;
