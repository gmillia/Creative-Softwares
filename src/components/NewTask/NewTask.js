import React from 'react';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    newTaskRoot: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
}))

const NewTask = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.newTaskRoot} >
            <Tooltip title='Add new Task' >
                <IconButton>
                    <AddCircleIcon color='error' fontSize='large' />
                </IconButton>
            </Tooltip>
        </Grid>
    )
};

export default NewTask; 