import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './ModalStyled';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import contactsOperations from '../../redux/phoneBook';

//Делаем портал для рендера модалки
const modalRoot = document.querySelector('#modal-root');

const EditContactModal = ({ currentContact, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handleSubmit = event => {
    event.preventDefault();
    const newData = {contactId:currentContact.id ,newData:{name:name, number:number}}
    console.log(newData);
    dispatch(contactsOperations.patchContact(newData));
    dispatch(contactsOperations.getContacts());
    setName('');
    setNumber('');
    onClose();
  };

  

  return createPortal(
    <Overlay onClick={handleBackDrop}>
      <Modal>
        <Box
          component="form"
          color="inherit"
          sx={{
            width: '100%',
            bgcolor: 'background.main',
            color: 'text.primary',
          }}
          onSubmit={handleSubmit}
        >
          <Typography
            variant="h6"
            component="h2"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            {currentContact.name} - {currentContact.number}
          </Typography>
          <TextField
            id="name"
            label="Enter contact name"
            variant="standard"
            sx={{ m: 2 }}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="number"
            label="Enter contact number"
            variant="standard"
            sx={{ m: 2 }}
            onChange={e => setNumber(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              ml: 1,
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              ml: 1,
            }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default EditContactModal;
