import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

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

      <p>Contact list</p>
      <ul>
        <li>
          <p>Name-Number</p>
          <button type="button">Patch button</button>
          <button type="button">Delete button</button>
        </li>
        <li>
          <p>Name-Number</p>
          <button type="button">Patch button</button>
          <button type="button">Delete button</button>
        </li>
        <li>
          <p>Name-Number</p>
          <button type="button">Patch button</button>
          <button type="button">Delete button</button>
        </li>
      </ul>
    </>
  );
};

export default ContactsPage;
