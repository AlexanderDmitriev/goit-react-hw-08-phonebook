import { useEffect } from 'react';
import { createPortal } from 'react-dom';

//Делаем портал для рендера модалки
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose }) => {
  const handleEsc = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  //Вешаем/снимаем слушатель событий при нажатии клавиши Escape
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(<div onClick={handleBackDrop}></div>, modalRoot);
};

export default Modal;
