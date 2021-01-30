import React, { useState, useEffect } from 'react';

import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Task, TaskHead, PriorityButtons } from 'components';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const Tasks = () => {
    const classes = useStyles();
    const { tasks } = useLocalStorage();
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : false);
    }

    //Liten to local storage changes
    useEffect(() => {
    }, [tasks])

    return (
        <Grid container item xs={12} display='flex' flexDirection='column' >
        {
            tasks.map((task, index) => {
                return (
                    task.completed 
                    ? null
                    : 
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
                            <PriorityButtons initialPriority={task.priority} />
                        </AccordionDetails>
                    </Accordion>
                )
            })
        }
        </Grid>
    )
}

export default Tasks;