import React from 'react';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    dateRoot: {
        maxWidth: 300,
        letterSpacing: 0.26634,
        color: '#545454',
        padding: '10px 10px 10px 10px',
        boxShadow: theme.shadows[2],
        borderRadius: 16,
        [theme.breakpoints.up('sm')]: {
            padding: '32px 16px 32px 16px',
            minWidth: 282,
            minHeight: 160
        }
    },
    dayName: {
        fontSize: 28,
        lineHeight: '90%',
    },
    monthDay: {
        fontSize: 36,
        lineHeight: '90%',
    },
    year: {
        fontSize: 28,
        color: '#AFAFAF',
        lineHeight: '90%',
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
        <Grid container item xs={8} sm={12} className={classes.dateRoot} >
            <Grid item xs={12} className={classes.dayName} >
                {dayName}
            </Grid>
            <Grid item xs={12} className={classes.monthDay} >
                {data}, {day}
            </Grid>
            <Grid item xs={12} className={classes.year} >
                {year}
            </Grid>
        </Grid>
    )
};

export default DateDisplay;