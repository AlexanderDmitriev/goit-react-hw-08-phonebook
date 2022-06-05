import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
/* import { useSelector } from 'react-redux'; */
import { useState } from 'react';
import { ContactsPageItems } from '../components/ContactsPageItem';
import AddContactModal from '../components/Modal/AddContactModal';
import { FilterContainer } from '../components/FilterContainer';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ContactsPage = () => {
  /*  const loggedIn = useSelector(state => state.isLoggedIn); */
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(filter);
  };

  const example = [
    { name: 'user1', number: 'number1' },
    { name: 'user2', number: 'number2' },
  ];

  return (
    <Box
        sx={{
          width: '100%',
          bgcolor: 'background.main',
          color: 'text.primary',
          p:3
        }}
      >
      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        onClick={toggleModal}
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
    </Box>
  );
};

export default ContactsPage;
