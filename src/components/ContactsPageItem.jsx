import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import EditContactModal from '../components/Modal/EditContactModal';


export const ContactsPageItems = ({ data }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
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
            <ListItem disablePadding sx={{ m: 1 }}>
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
              >
                Delete contact
              </Button>
            </ListItem>
          ))}
        </List>
        {showEditModal && <EditContactModal onClose={toggleEditModal} />}
      </Box>
    </>
  );
};
