import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface Props {
    message:string
}


export default function CustomizedSnackbars({message}:Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
       <Snackbar 
        anchorOrigin={{vertical:"top", horizontal:"center"}}
         open={open} 
         autoHideDuration={5000} 
         onClose={handleClose}
       >
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
      
      
    </div>
  );
}