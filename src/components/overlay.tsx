import React, { useEffect, useRef } from 'react';
import '@/styles/overlay.css';

interface Props {
  visible: boolean;
  onClose: () => void;
}

const Overlay = ({ visible, onClose }: Props) => {
  const overlayRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const overlayElement = overlayRef.current;
    if (overlayElement) {
      if (visible) {
        overlayElement.style.display = 'block';
        setTimeout(() => {
          overlayElement.style.opacity = '1';
        }, 200);
      } else {
        overlayElement.style.opacity = '0';
        setTimeout(() => {
          overlayElement.style.display = 'none';
        }, 400);
      }
    }
  }, [visible]);

  return <section ref={overlayRef} onClick={onClose} id="overlay" />;
};

export default Overlay;
