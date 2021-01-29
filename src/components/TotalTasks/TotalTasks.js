import React, { useEffect } from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    totalTasks: {
        display: 'flex',
        flexDirection: 'column',
        padding: '25px 10px 25px 10px',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: theme.shadows[2],
    },
    total: {
        fontSize: 55,
    },
    tasks: {
        fontSize: 40,
        color: blue[800]
    }
}))

const TotalTasks = () => {
    const classes = useStyles();
    const { total } = useLocalStorage();

    useEffect(() => {

    }, [total])

    return (
        <Grid item xs={6} className={classes.totalTasks} >
            <Grid item xs={12} className={classes.total} >
                {total}
            </Grid>
            <Grid item xs={12} className={classes.tasks} >
                Tasks
            </Grid>
        </Grid>
    )
};

export default TotalTasks;