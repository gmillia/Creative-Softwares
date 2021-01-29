import React from 'react';

import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Task } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tasksRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch'
    }
}))

const Tasks = () => {
    const { tasks } = useLocalStorage();
    const classes = useStyles();

    //Liten to local storage changes
    React.useEffect(() => {

    }, [tasks])

    return (
        <Grid container item xs={12} className={classes.tasksRoot} >
        {
            tasks.map((task, index) => {
                return (
                    task.completed 
                    ? null
                    : <Task key={index} task={task} />
                )
            })
        }
        </Grid>
    )
}

export default Tasks;