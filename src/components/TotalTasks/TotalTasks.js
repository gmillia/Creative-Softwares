import React, { useEffect } from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    totalTasks: {
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: theme.shadows[2],
        borderRadius: 16,
        [theme.breakpoints.up('sm')]: {
            padding: '25px 10px 25px 10px',
            marginTop: 32,
            minWidth: 150,
        }
    },
    total: {
        color: '#265A88',
        fontWeight: 800,
        fontSize: 44,
        [theme.breakpoints.up('sm')]: {
            fontSize: 64,
        }
    },
    tasksWrap: {
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tasks: {
        fontWeight: 500,
        letterSpacing: 0.364,
        background: '#F6F6F6',
        borderRadius: 8,
        minWidth: 83,
        minHeight: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

const TotalTasks = () => {
    const classes = useStyles();
    const { total } = useLocalStorage();

    useEffect(() => {

    }, [total])

    return (
        <Grid item xs={4} sm={6} className={classes.totalTasks} >
            <Grid item xs={12} className={classes.total} >
                {total}
            </Grid>
            <Grid item xs={12} className={classes.tasksWrap} >
                <div className={classes.tasks}>
                Tasks
                </div>
            </Grid>
        </Grid>
    )
};

export default TotalTasks;