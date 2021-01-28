import React, { useState } from 'react';
import clsx from 'clsx';

//FUNCTIONS
import { addTask } from 'functions';

//COMPONENTS
import { Calendar } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(thene => ({
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
        backgroundColor: '#5FCD8D',
        '&:hover': {
            backgroundColor: '#55b87e'
        }

    },
    medium: {
        background: '#FB8333',
        '&:hover': {
            backgroundColor: '#e1752d'
        }
    },
    high: {
        background: '#FF6159',
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

const ButtonGroup = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.buttonGroup}>
            <Button className={clsx(classes.button, classes.low)} size='small' >
                Low
            </Button>
            <Button className={clsx(classes.button, classes.medium)} size='small'>
                Medium
            </Button>
            <Button className={clsx(classes.button, classes.high)} size='small'>
                High
            </Button>
        </Grid>
    )
}

const AddNewTask = () => {
    const classes = useStyles();
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState(new Date());

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    }

    const addNewTask = () => {
        addTask({
            name: taskName,
            priority: priority,
            date: date,
        })
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
                    <ButtonGroup />
                    <Calendar setDateCallback={setDate} />
                    <Grid item xs={12} className={classes.actionButtons} >
                        <Button size='small' className={classes.cancel} >
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