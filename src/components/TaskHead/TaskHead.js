import React from 'react';

//COMPONENTS
import { CompleteTask, TaskDueDate, RemoveTask, Calendar, PriorityButtons } from 'components';

//MATERIAL UI
import Grid from '@material-ui/core/Grid';

const TaskHead = ({ task, expanded=false }) => {
    return (
        <Grid container alignItems="center" display="flex" >
            <Grid  container item xs={4} sm={6} display='flex' alignItems='center' justifyContent='flex-start'>
                <CompleteTask task={task} />
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
                    ? <Calendar />
                    : null
                }
            </Grid> 
        </Grid>
    )
};

export default TaskHead;