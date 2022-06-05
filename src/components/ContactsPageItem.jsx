import Typography from '@mui/material/Typography';

export const ContactsPageItem = () => {
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
