import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//HOOKS
import { useLocalStorage } from 'hooks';

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
/**
 * Component which display Tasks based on their completion. That is, it filters tasks using pending param. 
 * 
 * @param {Boolean} pending Specifies whether to filter tasks which are currently not completed or not.  
 */
const Tasks = ({ pending=false }) => {
    const classes = useStyles();
    const { tasks } = useLocalStorage();
    const filteredTasks = tasks.filter(obj => pending ? !obj.completed : obj.completed);
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : false);
    }

    //Liten to local storage changes
    useEffect(() => {
        setExpanded(false);
    }, [tasks, pending])

    return (
        <Grid container item xs={12} display='flex' flexDirection='column' >
        {
            filteredTasks.map((task, index) => {
                return (
                    <Accordion key={index} expanded={expanded === index} onChange={handleExpansion(index)} >
                        <AccordionSummary
                            classes={{
                                expanded: classes.expanded,
                                content: classes.content
                            }}
                        >
                            <TaskHead task={task} expanded={expanded === index} />
                        </AccordionSummary>
                        <AccordionDetails classes={{ root: classes.details }} >
                            <TaskPriority task={task} />
                        </AccordionDetails>
                    </Accordion>
                )
            })
        }
        </Grid>
    )
}

Tasks.propTypes = {
    pending: PropTypes.bool,
}

export default Tasks;