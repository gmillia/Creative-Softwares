import React from 'react';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    dateRoot: {
        letterSpacing: 0.26634,
        color: '#545454',
        padding: '10px 10px 10px 10px',
        boxShadow: theme.shadows[2],
        borderRadius: 16,
        background: 'white',
        [theme.breakpoints.up('sm')]: {
            padding: '32px 16px 32px 16px',
            minWidth: 250,
            minHeight: 160
        }
    },
    dayName: {
        fontSize: 28,
        lineHeight: '90%',
    },
    monthDay: {
        fontSize: 36,
    },
    year: {
        fontSize: 28,
        color: '#AFAFAF',
    }
}))

const DateDisplay = () => {
    const classes = useStyles();
    const date = new Date();
    const dayName = date.toLocaleString('en-us', { weekday: 'long' });
    const data = date.toLocaleDateString('en-us', {month: 'long'});
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <Grid item className={classes.dateRoot} display='flex' flexDirection='column' >
            <Grid item className={classes.dayName} >
                {dayName}
            </Grid>
            <Grid item className={classes.monthDay} >
                {data}, {day}
            </Grid>
            <Grid item className={classes.year} >
                {year}
            </Grid>
        </Grid>
    )
};

export default DateDisplay;