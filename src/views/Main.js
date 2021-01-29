import React, { useEffect, useState } from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Tasks, NewTask } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    mainRoot: {
        width: '100%',
        minHeight: '100vh'
    },
    taskRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}))

const Main = () => {
    const { tasks } = useLocalStorage();
    console.log('in: ', tasks)
    //onsole.log(tasks);
    const [taskCount, setTaskCount] = useState(tasks.objects.length);
    const classes = useStyles();

    useEffect(() => {
        //console.log(tasks);
        if(tasks.objects.length > taskCount) 
        setTaskCount(tasks.objects.length)
    }, [tasks])

    return (
        <Grid container spacing={0} className={classes.mainRoot} justify='center' >
            <Grid container item xs={12} sm={10} md={8}>
                <Grid item xs={12} sm={8} className={classes.taskRoot}>
                    <Tasks />
                    <NewTask />
                </Grid>
                <Grid item xs={12} sm={4}>

                </Grid>
            </Grid>
        </Grid>
    )
};

export default Main;