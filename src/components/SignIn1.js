import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { GoogleLogin } from 'react-google-login';
import FacebookLoginWithButton from 'react-facebook-login';
import {Box} from '@material-ui/core';

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";


function DialogComponent () {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign in example 1
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogContent>
            <Feature1 close={handleClose} signIn={handleClose}/>
        </DialogContent>

      </Dialog>
    </div>
  );

}



function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}

const useStyles = makeStyles(theme => ({
root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
}
}));

function Feature1(props) {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const theme = useTheme();
    const {signIn, close} = props;

    const handleChange = ()=>{
        value === 0
        ? setValue(1)
        : setValue(0);
    }

    return (
    <div className={classes.root}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
        >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
        </Tabs>
        <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
        >
        <TabContainer dir={theme.direction}><SignIn1 signIn={signIn} close={close} /></TabContainer>
        <TabContainer dir={theme.direction}><SignUp1 signIn={signIn} close={close} /></TabContainer>
        </SwipeableViews>
    </div>
    );

}

Feature1.propTypes = {
// children: PropTypes.node.isRequired,
// dir: PropTypes.string.isRequired,
classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(DialogComponent);


function SignUp1(props){
    const {signIn, close} = props;

    return (
        <>
        <Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
            />

            
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Confirm Password"
                type="password"
                fullWidth
            />
            </Box>
            <Box style={{marginTop: '10px'}}>
                <Box style={{marginBottom: '20px'}}>
                    <GoogleLogin 
                        clientId={()=>{}} 
                        onSuccess={()=>{}} 
                        isSignedIn={true}
                    />
                </Box>
                <Box>
                    <FacebookLoginWithButton
                        size="small"
                        appId="1088597931155576"
                        layout="rounded"
                        type="continue_with"
                        autoLoad={true}
                        onClick={()=>{}}
                        callback={()=>{}} 
                        width="50px"
                        icon="fa-facebook"/>
                    </Box>
            </Box>
            <DialogActions>
          <Button onClick={()=>{close()}} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{signIn()}} color="primary">
            Sign In
          </Button>
        </DialogActions>
        </>
    )
}

function SignIn1(props) {
    const {signIn, close} = props;

    return (
        <>
        <Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
            />
            </Box>
            <Box style={{marginTop: '10px'}}>
                <Box style={{marginBottom: '20px'}}>
                    <GoogleLogin 
                        clientId={()=>{}} 
                        onSuccess={()=>{}} 
                        isSignedIn={true}
                    />
                </Box>
                <Box>
                    <FacebookLoginWithButton
                        size="small"
                        appId="1088597931155576"
                        layout="rounded"
                        type="continue_with"
                        autoLoad={true}
                        onClick={()=>{}}
                        callback={()=>{}} 
                        width="50px"
                        icon="fa-facebook"/>
                    </Box>
            </Box>
            <DialogActions>
          <Button onClick={()=>{close()}} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{signIn()}} color="primary">
            Sign In
          </Button>
        </DialogActions>
        </>
    )
}