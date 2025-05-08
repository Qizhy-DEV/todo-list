import React, { useCallback, useEffect, useRef, useState } from 'react';
import '@/styles/overlay.css';
import overlayManager from '@/utils/overlayManager';

const Overlay = () => {
    const overlayRef = useRef<HTMLElement | null>(null);

    const [visible, setVisible] = useState(false);

    const handleVisibility = useCallback((visible: boolean) => {
        setVisible(visible);
    }, []);

    useEffect(() => {
        overlayManager.on('onOpen', handleVisibility);
        overlayManager.on('onClose', handleVisibility);

        return () => {
            overlayManager.off('onOpen', handleVisibility);
            overlayManager.off('onClose', handleVisibility);
        };
    }, []);

    useEffect(() => {
        const overlayElement = overlayRef.current;

        if (!overlayElement) return;

        if (visible) {
            overlayElement.style.display = 'block';
            setTimeout(() => {
                overlayElement.style.opacity = '1';
            }, 200);
        } else {
            overlayElement.style.opacity = '0';
            const timeout = setTimeout(() => {
                overlayElement.style.display = 'none';
            }, 400);
            return () => clearTimeout(timeout);
        }
    }, [visible]);

    return <section onClick={() => overlayManager.onClose()} ref={overlayRef} id="overlay" />;
};

export default Overlay;
