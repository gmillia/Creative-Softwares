import React, { useState } from 'react';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const AddNewTask = () => {
    const [taskName, setTaskName] = useState('');

    const addNewTask = () => {

    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl>
                    <TextField 

                    />
                </FormControl>
            </Grid>
        </Grid>
    )
};

export default AddNewTask;