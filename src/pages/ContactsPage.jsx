import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ContactsPageItems } from '../components/ContactsPageItem';
import AddContactModal from '../components/AddContactModal';

const ContactsPage = () => {
  const loggedIn = useSelector(state => state.isLoggedIn);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const example = [
    { name: 'user1', number: 'number1' },
    { name: 'user2', number: 'number2' },
  ];

  return (
    <>
      <button type="button" onClick={toggleModal}>
        addNewContact button-open modal
      </button>
      <Typography
        variant="h6"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1 }}
      >
        Filter
      </Typography>
      <label>
        Filter input
        <input type="text" name="filter" />
      </label>
      {!loggedIn && (
        <Typography
          variant="h6"
          component="h2"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          You have no contacts yet
        </Typography>
      )}
      <ContactsPageItems data={example} />
      {showModal && <AddContactModal onClose={toggleModal} />}
    </>
  );
};

export default ContactsPage;
