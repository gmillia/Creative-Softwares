import React from 'react';

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
    const classes = useStyles();

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