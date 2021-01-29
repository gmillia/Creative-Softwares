import React from 'react';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    dateRoot: {
        display: 'flex',
        padding: '25px 10px 25px 10px',
        boxShadow: theme.shadows[2],
        borderRadius: 5,
    },
    dayName: {
        fontSize: 35,
        lineHeight: '90%'
    },
    monthDay: {
        fontSize: 40,
        lineHeight: '90%'
    },
    year: {
        fontSize: 30,
        color: theme.palette.grey[500],
        lineHeight: '90%'
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
        <Grid container item xs={12} className={classes.dateRoot} >
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