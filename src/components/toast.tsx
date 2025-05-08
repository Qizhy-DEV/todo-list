import { StatusToast, Toast } from '@/interfaces/toast';
import React, { AnimationEvent } from 'react';

interface Props {
    toast: Toast;
    clear: (id: string) => void;
}

const ToastElement = ({ toast, clear }: Props) => {
    const toastIcons = {
        [StatusToast.SUCCESS]: 'fa-check',
        [StatusToast.WARNING]: 'fa-exclamation',
        [StatusToast.FAIL]: 'fa-circle-exclamation',
    };

    const checkCompleteAnimation = (e: AnimationEvent<HTMLDivElement>) => {
        if (e.animationName === 'fadeOut') {
            clear(toast.id as string);
        }
    };

    return (
        <div
            data-id={toast.id}
            onAnimationEnd={checkCompleteAnimation}
            style={{
                height: toast.done ? 0 : '70px',
                animation: `slideInRight ease 0.4s, fadeOut ease 1s ${(toast.duration / 1000).toFixed(2)}s forwards`,
            }}
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

export default ToastElement;
