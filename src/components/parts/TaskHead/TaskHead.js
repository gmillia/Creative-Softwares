import React from 'react';
import PropTypes from 'prop-types';

//COMPONENTS
import { CompleteTask, TaskDueDate, RemoveTask, TaskDate } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';

/**
 * Component which displays information about Task in the header of the Task view. Displays different information based
 * on whether Task is expanded or not. 
 * 
 * @param {Object} task Task object
 * @param {Boolean} expanded Specifies whether Task is in the expanded view or not. [DEFAULT: False] 
 */
const TaskHead = ({ task, expanded=false }) => {
    return (
        <Grid container alignItems="center" display="flex" >
            <Grid  container item xs={4} sm={6} display='flex' alignItems='center' justifyContent='flex-start'>
                <CompleteTask task={task} completed={task.completed} />
                <Grid item style={{wordBreak: 'break-all'}}>{task.name}</Grid>
            </Grid>
            <Grid item xs={8} sm={6} display='flex' alignItems='center' justifyContent='flex-end'>
                {
                    expanded 
                    ? <RemoveTask task={task} />
                    : null
                }
                <TaskDueDate task={task} />
                {
                    expanded 
                    ? <TaskDate task={task} />
                    : null
                }
            </Grid> 
        </Grid>
    )
};

TaskHead.propTypes = {
    task: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
}

export default TaskHead;