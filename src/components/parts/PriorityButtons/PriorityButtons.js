import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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

/**
 * Component which display 3 buttons used to set priority for the Task.
 * 
 * @param {Function} setPriorityCallback    Callback function which can be used to set priority in the parent component.
 * @param {Object}  task                    Task object. 
 */
const PriorityButtons = ({ setPriorityCallback, task }) => {
    const [priority, setPriority] = useState(task ? task.priority : undefined);
    const classes = useStyles({ priority: priority });
    
    React.useEffect(() => {
        setPriority(task ? task.priority : undefined)
    }, [task])

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
        <Grid item display='flex' alignItems='center' justifyContent='flex-end' >
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

PriorityButtons.propTypes = {
    setPriorityCallback: PropTypes.func,
    task: PropTypes.object,
}

export default PriorityButtons;