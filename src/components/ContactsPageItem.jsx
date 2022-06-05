import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const ContactsPageItems = ({ data }) => {
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
        }}
      >
        <Divider />
        
          <List>
            {data.map(contactItem => (
              <ListItem disablePadding>
                <ListItemText primary={`${contactItem.name} - ${contactItem.number}`} />
                <button type="button">Patch button</button>
                <button type="button">Delete button</button>
              </ListItem>
            ))}
          </List>
      
      </Box>
    </>
  );
};
