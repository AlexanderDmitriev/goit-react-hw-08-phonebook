import  {useState} from 'react';
import { createTheme } from '@mui/material/styles';


const DarkTheme = () => {
    const [dark,setDark]=useState(false);

    let theme = createTheme({
        palette: {
          type: dark? 'dark':'light',
        },
      });

};

