import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ContactsPageItems } from '../components/ContactsPageItem';
import AddContactModal from '../components/Modal/AddContactModal';
import { FilterContainer } from '../components/FilterContainer';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { filterContacts } from '../redux/filter';
/* import {phoneBookApi} from '../redux/contacts'; */
import contactsOperations from '../redux/phoneBook'

const ContactsPage = () => {
  const dispatch = useDispatch();
  /*  const loggedIn = useSelector(state => state.isLoggedIn); */
  const [showAddingModal, setShowAddingModal] = useState(false);

  const filterContact = useSelector(state => state.filter.value);
  /*  const [filter, setFilter] = useState(''); */

  /* const { data, error, isFetching } = phoneBookApi.useGetAllContactsQuery(); */
  const { data:contacts, /* error, isFetching */ } = dispatch(contactsOperations.getContacts());

/* console.log(data); */

  /* const contacts = [
    { name: 'user1', number: 'number1' },
    { name: 'user2', number: 'number2' },
  ]; */

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
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.main',
          color: 'text.primary',
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}
      >
        <FilterContainer>
          <Typography
            variant="h6"
            component="h2"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            Filter
          </Typography>
          <TextField
            id="filter"
            variant="outlined"
            size="small"
            sx={{ ml: 3 }}
            onChange={changeFilter}
          />
        </FilterContainer>
      </Box>

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
