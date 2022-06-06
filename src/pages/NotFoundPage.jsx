import { HiOutlineEmojiSad } from 'react-icons/hi';
import Box from '@mui/material/Box';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.main',
        color: 'text.primary',
        p: 3,
      }}
    >
      <h1>404 Page not found</h1>
      <HiOutlineEmojiSad size="256px" />
    </Box>
  );
}
