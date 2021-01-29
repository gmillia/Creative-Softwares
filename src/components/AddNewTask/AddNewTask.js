import React, { useState } from 'react';
import clsx from 'clsx';

//FUNCTIONS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Calendar } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    button: {
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'white',
    },
    low: {
        backgroundColor: props => props.priority === 'Low' || props.priority.length === 0 ? '#5FCD8D' : '#CBCBCB',
        '&:hover': {
            backgroundColor: '#55b87e'
        }

    },
    medium: {
        backgroundColor: props => props.priority === 'Medium' || props.priority.length === 0 ? '#FB8333' : '#CBCBCB',
        '&:hover': {
            backgroundColor: '#e1752d'
        }
    },
    high: {
        backgroundColor: props => props.priority === 'High'  || props.priority.length === 0 ? '#FF6159' : '#CBCBCB',
        '&:hover': {
            backgroundColor: '#e55750'
        }
    },
    create: {
        background: 'black',
        marginLeft: 10,
        color: 'white'
    },
    cancel: {
        background: 'red',
        color: 'white'
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white'
    }
}));

const ButtonGroup = ({ setPriority, priority, classes }) => {
    const handleClick = (newPriority) => {
        if(setPriority instanceof Function) {
            if(priority === newPriority) setPriority('');
            else setPriority(newPriority);
        }
    }

    return (
        <Grid item xs={12} className={classes.buttonGroup}>
            <Button className={clsx(classes.button, classes.low)} size='small' onClick={() => handleClick('Low')} >
                Low
            </Button>
            <Button className={clsx(classes.button, classes.medium)} size='small' onClick={() => handleClick('Medium')}>
                Medium
            </Button>
            <Button className={clsx(classes.button, classes.high)} size='small' onClick={() => handleClick('High')}>
                High
            </Button>
        </Grid>
    )
}

const AddNewTask = ({ closeDialog }) => {
    const { addTask } = useLocalStorage();
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState(new Date());

    const classes = useStyles({ priority: priority });

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    }

    const addNewTask = () => {
        addTask({
            name: taskName,
            priority: priority,
            date: date,
            completed: false,
        });

        handleCancel();
    }

    const handleCancel = () => {
        if(closeDialog instanceof Function) closeDialog();
    }

    const handleSetPriority = (newPriority) => {
        setPriority(newPriority);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl>
                    <TextField 
                        variant='outlined'
                        size='small'
                        label='Task Name'
                        onChange={handleTaskNameChange}
                    />
                    <ButtonGroup setPriority={handleSetPriority} priority={priority} classes={classes} />
                    <Calendar setDateCallback={setDate} />
                    <Grid item xs={12} className={classes.actionButtons} >
                        <Button size='small' className={classes.cancel} onClick={handleCancel} >
                            Cancel
                        </Button>
                        <Button size='small' className={classes.create} onClick={addNewTask} >
                            Create
                        </Button>
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    )
};

export default AddNewTask;