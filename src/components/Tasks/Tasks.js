import React from 'react';

//COMPONENTS
import { Task } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tasksRoot: {
        display: 'flex'
    }
}))

const Tasks = ({
    tasks=[]
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
        {
            tasks.map((task, index) => {
                return (
                    <Task task={task} />
                )
            })
        }
        </Grid>
    )
}

export default Tasks;