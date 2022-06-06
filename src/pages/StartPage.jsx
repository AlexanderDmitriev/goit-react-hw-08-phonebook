import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StartPage = () => {
  const welcomeMessage = `Welcome to the "My Contacts" application. We offer you an application that stores your contacts on a server storage. Give me some money, please, or my bot will call you back on Sunday at 6 am.`;
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1 }}
      >
        {welcomeMessage}
      </Typography>
    </Box>
  );
};

export default StartPage;
