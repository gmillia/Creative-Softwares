import React, { useState } from 'react';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    taskRoot: {
        minHeight: props => props.open ? 100 : 50,
        display: 'flex',
        padding: 5,
        border: '1px solid ' + theme.palette.grey[300],
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        alignItems: 'center'
    }
}))

/**
 * Task component which displays individual Task.
 * 
 * @param {*} param0 
 */
const Task = ({
    task
}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open: open });

    return (
        <Grid container spacing={0} className={classes.taskRoot} >
            <Checkbox disableFocusRipple disableRipple />
            { task.name }
        </Grid>
    )
};

export default Task;