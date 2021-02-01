import React from 'react';
import PropTypes from 'prop-types';

//HOOKS
import { useLocalStorage } from 'hooks';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    checkBox: {
        color: props => {
            let priority = props.priority;
            if(priority === 'Low') return '#5FCD8D';
            if(priority === 'Medium') return '#FB8333';
            if(priority === 'High') return '#FF6159';
        }
    },
}))

/**
 * Component which displays checkbox that can be used to mark task as completed.
 * 
 * @param {Object}  task task object  
 */
const CompleteTask = ({ task }) => {
    const priority = task ? task.priority : undefined;
    const completed = task ? task.completed : false;
    const classes = useStyles({ priority })
    const { changeTaskStatus } = useLocalStorage();

    const handleCheckBoxClick = () => {
        changeTaskStatus(task);
    }

    return (
        <div>
            <Tooltip title={completed ? 'Uncomplete Task' : 'Complete task'} >
                <Checkbox checked={completed} className={classes.checkBox} onClick={handleCheckBoxClick} />
            </Tooltip>
        </div>
    )
};

CompleteTask.propTypes = {
    task: PropTypes.object.isRequired,
}

export default CompleteTask;