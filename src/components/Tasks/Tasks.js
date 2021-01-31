import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Task } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';

/**
 * Component which display Tasks based on their completion. That is, it filters tasks using pending param. 
 * 
 * @param {Boolean} pending Specifies whether to filter tasks which are currently not completed or not.  
 */
const Tasks = ({ pending=false }) => {
    const { tasks } = useLocalStorage();
    const filteredTasks = tasks.filter(obj => pending ? !obj.completed : obj.completed);
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (id) => {
        setExpanded(id);
    }

    //Liten to local storage changes and tab changes
    useEffect(() => {
        setExpanded(false);
    }, [tasks, pending])

    return (
        <Grid container item xs={12} display='flex' flexDirection='column' >
        {
            filteredTasks.map((task, index) => (
                <Task key={index} task={task} expanded={expanded === task.id} setExpanded={handleExpansion} />
            ))
        }
        </Grid>
    )
}

Tasks.propTypes = {
    pending: PropTypes.bool,
}

export default Tasks;