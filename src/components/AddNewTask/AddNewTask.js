import React, { useState } from 'react';
import clsx from 'clsx';

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
    },
    low: {
        background: 'green'
    },
    medium: {
        background: 'orange',
    },
    high: {
        background: 'red'
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

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    }

    const addNewTask = () => {

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
                </FormControl>
            </Grid>
        </Grid>
    )
};

export default AddNewTask;