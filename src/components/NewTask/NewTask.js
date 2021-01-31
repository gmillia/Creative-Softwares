import React, { useState } from 'react';

//COMPONENTS
import { AddNewTask, Feedback } from 'components';

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
        justifyContent: 'flex-end',
        top: 'auto',
        bottom: 0,
        position: 'sticky'
    },
    dialogRoot: {
        background: theme.palette.grey[500]
    }
}))

/**
 * Component which displays Plus sign on the right bottom of the Tasks view. Controls opening and closing of the Dialog in which new Task can be created.
 */
const NewTask = () => {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    return (
        <Grid item xs={12} className={classes.newTaskRoot} >
            <Tooltip title='Add new Task' >
                <IconButton onClick={handleDialogOpen} >
                    <AddCircleIcon color='error' fontSize='large' />
                </IconButton>
            </Tooltip>
            <Dialog open={dialogOpen} onClose={handleDialogClose} >
                <DialogTitle>Add New Task</DialogTitle>
                <DialogContent>
                    <AddNewTask closeDialog={handleDialogClose}/>
                </DialogContent>
            </Dialog>
        </Grid>
    )
};

export default NewTask; 