import React, { useState } from 'react';
import clsx from 'clsx';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    buttonGroup: {
        display: 'flex',
        paddingTop: 16,
    },
    button: {
        padding: '4px 16px',
        color: 'white',
        minWidth: 60,
        minHeight: 24,
        borderRadius: 20,
        '&:nth-child(even)': {
            marginLeft: 8,
            marginRight: 8,
        }
    },
    low: {
        backgroundColor: props => !props.priority || props.priority === 'Low' ? '#5FCD8D' : '#CBCBCB',
        '&:hover': {
            backgroundColor: '#55b87e'
        }

    },
    medium: {
        backgroundColor: props => !props.priority || props.priority === 'Medium' ? '#FB8333' : '#CBCBCB',
        '&:hover': {
            backgroundColor: '#e1752d'
        }
    },
    high: {
        backgroundColor: props => !props.priority || props.priority === 'High' ? '#FF6159' : '#CBCBCB',
        '&:hover': {
            backgroundColor: '#e55750'
        }
    },
}))

const PriorityButtons = ({ setPriorityCallback, initialPriority }) => {
    const [priority, setPriority] = useState(initialPriority);
    const classes = useStyles({ priority: priority });

    const handleClick = (newPriority) => {
        if(priority === newPriority) {
            setPriority();
            if(setPriorityCallback instanceof Function) setPriorityCallback();
        }
        else {
            setPriority(newPriority)
            if(setPriorityCallback instanceof Function) setPriorityCallback(newPriority);
        }
    }

    return (
        <Grid item xs={12} className={classes.buttonGroup}>
            <Button className={clsx(classes.button, classes.low)} size='small' onClick={() => handleClick('Low')} >
                Low
            </Button>
            <Button className={clsx(classes.button, classes.medium)} size='small' onClick={() => handleClick('Medium')}>
                Medium
            </Button>
            <Button className={clsx(classes.button, classes.high)} size='small' onClick={() => handleClick('High')}>
                High
            </Button>
        </Grid>
    )
};

export default PriorityButtons;