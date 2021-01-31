import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        background: '#1F1F1F',
        marginLeft: 10,
        color: 'white',
        '&:hover': {
            backgroundColor: '#1F1F1F'
        }
    },
    cancel: {

    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white'
    }
}));

/**
 * Component which shows fields neccessary to create a new Task. 
 * When user clicks Create button, task is added to the local storage.
 * 
 * @param {Function} closeDialog Callback function which is used to close the dialog in which this component is displayed.  
 */
const AddNewTask = ({ closeDialog }) => {
    const { addTask } = useLocalStorage();
    const [taskName, setTaskName] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState(new Date());

    const classes = useStyles({ priority: priority });

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    }

    //Function which adds new Task to the local storage.
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
                        style={{paddingBottom: 16}}
                        inputProps={{ maxLength: 100 }}
                    />
                    <PriorityButtons setPriorityCallback={handleSetPriority} />
                    <Grid item xs={12} display='flex' alignItems='center' >
                        <Calendar setDateCallback={setDate} displayDate />
                    </Grid>
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

AddNewTask.propTypes = {
    closeDialog: PropTypes.func,
}

export default AddNewTask;