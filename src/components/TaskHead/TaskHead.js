import React from 'react';

//COMPONENTS
import { CompleteTask, TaskDueDate, RemoveTask, Calendar, PriorityButtons } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';

const TaskHead = ({ task, expanded=false }) => {
    return (
        <Grid container alignItems="center" display="flex" >
            <Grid item xs={6} display='flex' alignItems='center' justifyContent='flex-start'>
                <CompleteTask task={task} />
                {task.name}
            </Grid>
            <Grid item xs={6} display='flex' alignItems='center' justifyContent='flex-end'>
                {
                    expanded 
                    ? <RemoveTask task={task} />
                    : null
                }
                <TaskDueDate task={task} />
                {
                    expanded 
                    ? <Calendar />
                    : null
                }
            </Grid> 
        </Grid>
    )
};

export default TaskHead;