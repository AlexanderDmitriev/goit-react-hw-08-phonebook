import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditContactModal from '../components/Modal/EditContactModal';
import contactsOperations from '../redux/phoneBook';

export const ContactsPageItems = ({ data }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentContact, setCurrentContact] = useState('');

  const toggleEditModal = (e) => {
    setShowEditModal(!showEditModal);
  };

  const handleDelete = () => {
    dispatch(contactsOperations.deleteContact(currentContact.id));
    dispatch(contactsOperations.getContacts());
  };

  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1 }}
      >
        Contact list
      </Typography>
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
        <Divider />

        <List>
          {data.map(contactItem => (
            <ListItem disablePadding sx={{ m: 1 }} onFocus={()=>setCurrentContact(contactItem)} key={contactItem.id}>
              <ListItemText
                primary={`${contactItem.name} - ${contactItem.number}`}
              />
              <Button
                variant="contained"
                endIcon={<EditIcon />}
                sx={{ ml: 1 }}
                onClick={toggleEditModal}
              >
                Edit contact
              </Button>
              <Button
                variant="contained"
                endIcon={<DeleteIcon />}
                sx={{ ml: 1 }}
                onClick={handleDelete}
              >
                Delete contact
              </Button>
            </ListItem>
           
          ))}
        </List>
        {showEditModal && <EditContactModal currentContact={currentContact} onClose={toggleEditModal} />}
      </Box>
    </>
  );
};
