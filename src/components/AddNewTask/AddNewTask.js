import React, { useState } from 'react';
import clsx from 'clsx';

//FUNCTIONS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Calendar, PriorityButtons } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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
                    <PriorityButtons setPriorityCallback={handleSetPriority} />
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