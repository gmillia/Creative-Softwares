import React, { useState } from 'react';

//COMPONENTS
import { Tasks, NewTask, DateDisplay, TotalTasks, FakeTabs } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    },
    taskView: {
        display: 'flex',
        padding: 15,
        borderRadius: 16,
        boxShadow: theme.shadows[10],
        background: 'white',
        minHeight: "70%",
        [theme.breakpoints.up('sm')]: {
            minHeight: '100%'
        }
    },
    sideWrap: {
        padding: 15,
        justifyContent: 'space-between',
        [theme.breakpoints.up('sm')]: {
            padding: '0px 15px 0px 64px',
        }
    }
}))

const Main = () => {
    const [tab, setTab] = useState();
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const handleTabChange = (newTab) => {
        setTab(newTab);
    }

    return (
        <Grid container spacing={0} className={classes.mainRoot} justifyContent='center'  >
            <Grid container item xs={12} sm={10} md={8} className={classes.mainWrap} alignContent='flex-end' >
                {
                    desktop 
                    ? <FakeTabs setTabCallback={handleTabChange} />
                    : null
                }
                <Grid container item xs={12} sm={8} className={classes.taskView} alignContent='stretch' >
                    <Tasks pending={tab ? tab.toUpperCase() === 'PENDING' : false} />
                    <NewTask />
                </Grid>
                {
                    desktop 
                    ? null
                    : <FakeTabs setTabCallback={handleTabChange} />
                }
                <Grid container item xs={12} sm={4} className={classes.sideWrap} display='flex' alignContent='flex-start' >
                    <DateDisplay />
                    <TotalTasks />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Main;