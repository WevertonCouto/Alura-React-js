import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Toast = ({open, handleClose, children, severity}) => {
    return (
        <Snackbar 
            open={open} 
            message="Snackbar funcionando" 
            onClose={handleClose}
            autoHideDuration={2000}>
                <Alert onClose={handleClose} variant="filled" severity={severity}>
                    {children}
                </Alert>
            </Snackbar>);
}

export default Toast;