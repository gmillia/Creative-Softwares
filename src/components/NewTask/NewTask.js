import React, { useState } from 'react';

//COMPONENTS
import { AddNewTask } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    newTaskRoot: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    dialogRoot: {
        background: theme.palette.grey[500]
    }
}))

const NewTask = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Grid item xs={12} className={classes.newTaskRoot} >
            <Tooltip title='Add new Task' >
                <IconButton onClick={handleOpen} >
                    <AddCircleIcon color='error' fontSize='large' />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} className={classes.dialogRoot} >
                <DialogTitle>Add New Task</DialogTitle>
                <DialogContent>
                    <AddNewTask />
                </DialogContent>
            </Dialog>
        </Grid>
    )
};

export default NewTask; 