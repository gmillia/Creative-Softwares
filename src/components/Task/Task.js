import React, { useState } from 'react';

//COMPONENTS
import { Calendar, TaskDueDate, PriorityButtons, CompleteTask, RemoveTask } from 'components';

//HOOKS
import { useLocalStorage } from 'hooks';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    taskRoot: {
        minHeight: props => props.open ? 108 : 40,
        display: 'flex',
        padding: 5,
        border: '1px solid ' + theme.palette.grey[300],
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        alignItems: 'center',
        cursor: 'pointer'
    },
}))

/**
 * Task component which displays individual Task.
 * 
 * @param {*} param0 
 */
const Task = ({
    task
}) => {
    const { removeTask, changeTaskStatus } = useLocalStorage();
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open: open, priority: task.priority });


    const handleDateChange = () => {

    }

    const handlePriorityChange = () => {

    }

    return (
        <Grid container spacing={0} className={classes.taskRoot} >
            <CompleteTask task={task} />
            { task.name }
            <RemoveTask task={task} />
            <Calendar />
            <TaskDueDate task={task} />
            <PriorityButtons />
        </Grid>
    )
};

export default Task;