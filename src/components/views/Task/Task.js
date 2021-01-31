import React from 'react';
import PropTypes from 'prop-types';

//COMPONENTS
import { TaskHead, TaskPriority } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const useStyles = makeStyles(theme => ({
    expanded: {
        margin: "5px auto !important"
    },
    content: {
        transition: 'none !important'
    },
    details: {
        padding: '0px 16px 16px 16px'
    }
}))

const Task = ({
    task,
    expanded=false,
    setExpanded
}) => {
    const classes = useStyles();

    const handleExpansion = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : false);
    }

    return (
        <Accordion expanded={expanded} onChange={handleExpansion(task.id)} >
            <AccordionSummary
                classes={{
                    expanded: classes.expanded,
                    content: classes.content
                }}
            >
                <TaskHead task={task} expanded={expanded} />
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.details }} >
                <TaskPriority task={task} />
            </AccordionDetails>
        </Accordion>
    )
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
    setExpanded: PropTypes.func.isRequired,
}

export default Task;