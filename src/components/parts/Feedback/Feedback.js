import React, { useState } from 'react';

//MATERIAL UI
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

/**
 * TEST COMPONENT
 * @param {*} param0 
 */
const Feedback = ({
    success=false,
    setOpenCallback,
}) => {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        if(setOpenCallback instanceof Function) setOpenCallback(false);
        setOpen(false);
    }

    return (
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={handleClose} 
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <MuiAlert severity={success ? 'success' : 'info'} onClose={handleClose} >
                Success
            </MuiAlert>
        </Snackbar>
    )
};

export default Feedback;