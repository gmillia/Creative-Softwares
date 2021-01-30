import React, { useState, useEffect } from 'react';

import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Task } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tasksRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
    }
}))

const Tasks = () => {
    const { tasks } = useLocalStorage();
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();

    const handleExpansion = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : false);
    }

    //Liten to local storage changes
    useEffect(() => {
    }, [tasks])

    return (
        <Grid container item xs={12} className={classes.tasksRoot} >
        {
            tasks.map((task, index) => {
                return (
                    task.completed 
                    ? null
                    : 
                    <Accordion key={index} expanded={expanded === index} onChange={handleExpansion(index)} >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                    
                        </AccordionSummary>
                        <AccordionDetails>
                            <Task key={index} task={task} />
                        </AccordionDetails>
                    </Accordion>
                )
            })
        }
        </Grid>
    )
}

export default Tasks;