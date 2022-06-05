import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './ModalStyled';

//Делаем портал для рендера модалки
const modalRoot = document.querySelector('#modal-root');

const AddContactModal = ({ onClose }) => {
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

  return createPortal(
    <Overlay onClick={handleBackDrop}>
      <Modal>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Number
          <input type="text" name="number" />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default AddContactModal;
