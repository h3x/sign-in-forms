import React from 'react';
import './App.css';

import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import SignIn1 from './components/SignIn1'

function App() {


  return (

    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      >
        <SignIn1 />
      
      
    </Box>
  );
}

export default App;
