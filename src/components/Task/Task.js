import React, { useState } from 'react';

//COMPONENTS
import { Calendar } from 'components';

//HOOKS
import { useLocalStorage } from 'hooks';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import EventRoundedIcon from '@material-ui/icons/EventRounded';

const useStyles = makeStyles(theme => ({
    taskRoot: {
        minHeight: props => props.open ? 100 : 50,
        display: 'flex',
        padding: 5,
        border: '1px solid ' + theme.palette.grey[300],
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        alignItems: 'center',
        cursor: 'pointer'
    },
    checkBox: {
        color: props => {
            let priority = props.priority;
            if(priority === 'Low') return '#5FCD8D';
            if(priority === 'Medium') return '#FB8333';
            if(priority === 'High') return '#FF6159';
        }
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
    const { removeTask, changeTaskStatus } = useLocalStorage();
    const [open, setOpen] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const classes = useStyles({ open: open, priority: task.priority });

    const handleCheckBoxClick = () => {
        changeTaskStatus(task);
    }

    const handleRemoveTask = () => {
        removeTask(task);
    }

    const handleCalendarOpen = () => {
        setOpenCalendar(!openCalendar);
    }

    const handleDateChange = () => {

    }

    const handlePriorityChange = () => {

    }

    return (
        <Grid container spacing={0} className={classes.taskRoot} >
            <Checkbox className={classes.checkBox} onClick={handleCheckBoxClick} />
            { task.name }
            <IconButton onClick={handleRemoveTask} >
                <CancelIcon />
            </IconButton>
            <IconButton onClick={handleCalendarOpen}>
                <EventRoundedIcon />
            </IconButton>
            {
                openCalendar
                ? <Calendar setDateCallback={handleDateChange} />
                : null
            }
        </Grid>
    )
};

export default Task;