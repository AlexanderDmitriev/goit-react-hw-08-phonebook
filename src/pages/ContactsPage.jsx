import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ContactsPageItems } from '../components/ContactsPageItem';
import AddContactModal from '../components/Modal/AddContactModal';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { filterContacts } from '../redux/filter';
/* import { phoneBookApi } from '../redux/contacts';*/
import contactsOperations from '../redux/phoneBook'; 
import {FilterSection} from '../components/Filter/FilterSection'

const ContactsPage = () => {
  const dispatch = useDispatch();
  //const [contacts, setContacts] = useState(useSelector(state => state.contacts.contacts));
  const contacts = useSelector(state => state.contacts.contacts);
  
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  },[dispatch]);
  //const contacts = useSelector(state => state.contacts.contacts);

   //Проверка пришли ли данные с сервера
  const [showAddingModal, setShowAddingModal] = useState(false);

  const filterContact = useSelector(state => state.filter.value);

  //const { data: contacts = [], error, isFetching } = phoneBookApi.useGetAllContactsQuery();
  /*  const contacts = dispatch(contactsOperations.getContacts()).then(); */
/*   const {
    data: contacts = [],
    error,
    isFetching,
  } = dispatch(contactsOperations.getContacts()); */

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  let visibleContacts = [];
  const normalizedFilter = filterContact.toLowerCase();
  if (contacts) {
    visibleContacts = contacts.filter(data =>
      data.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const toggleAddingModal = () => {
    setShowAddingModal(!showAddingModal);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        onClick={toggleAddingModal}
      >
        Add new contact
      </Button>
      <FilterSection changeFilter={changeFilter}/>
      {!contacts && (
        <Typography
          variant="h6"
          component="h2"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          You have no contacts yet
        </Typography>
      )}
      <ContactsPageItems data={visibleContacts} />
      {showAddingModal && <AddContactModal onClose={toggleAddingModal} />}
    </Box>
  );
};

export default ContactsPage;
