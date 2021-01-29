import React from 'react';

//COMPONENTS
import { Tasks, NewTask } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
    mainRoot: {
        width: '100%',
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
        display: 'flex',
        padding: 15,
        background: 'rgba(0,0,0,0.2)'
    },
}))

const Main = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.mainRoot} justifyContent='center' >
            <Grid container spacing={1} item xs={12} sm={10} md={8} className={classes.mainWrap} >
                <Grid container item xs={12} sm={8} className={classes.taskView}>
                    <Tasks />
                    <NewTask />
                </Grid>
                <Grid item xs={12} sm={4} style={{minHeight: 100}} >
                    ILLIA
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Main;