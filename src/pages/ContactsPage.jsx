import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { ContactsPageItem } from '../components/ContactsPageItem';

const ContactsPage = () => {
  const loggedIn = useSelector(state => state.isLoggedIn);

  return (
    <>
      <button type="button">addNewContact button-open modal</button>
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
      <ContactsPageItem />
    </>
  );
};

export default ContactsPage;
