import React from 'react';

//COMPONENTS
import { Tasks, NewTask, DateDisplay, TotalTasks } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    mainRoot: {
        minHeight: '100vh',
        paddingTop: 0,
        paddingBottom: 0,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 100,
            paddingBottom: 100
        },
    },
    mainWrap: {
        flexWrap: 'wrap-reverse',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    taskView: {
        minHeight: '80%',
        display: 'flex',
        padding: 15,
        borderRadius: 16,
        boxShadow: theme.shadows[10]
    },
    sideWrap: {
        minHeight: '10%',
        padding: 15,
        [theme.breakpoints.up('sm')]: {
            padding: '0px 15px 0px 80px',
        }
    }
}))

const Main = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.mainRoot} justifyContent='center'  >
            <Grid container item xs={12} sm={10} md={8} className={classes.mainWrap}  >
                <Grid container item xs={12} sm={8} className={classes.taskView} >
                    <Tasks />
                    <NewTask />
                </Grid>
                <Grid container item xs={12} sm={4} className={classes.sideWrap} alignContent='flex-start' >
                    <DateDisplay />
                    <TotalTasks />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Main;