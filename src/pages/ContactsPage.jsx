import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
/* import { useSelector } from 'react-redux'; */
import { useState } from 'react';
import { ContactsPageItems } from '../components/ContactsPageItem';
import AddContactModal from '../components/AddContactModal';
import { FilterContainer } from '../components/FilterContainer';

const ContactsPage = () => {
  /*  const loggedIn = useSelector(state => state.isLoggedIn); */
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('');

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
            sx={{ml:3}}
            onChange={e => setFilter(e.target.value)}
          />
        </FilterContainer>
      </Box>

      {!example && (
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
