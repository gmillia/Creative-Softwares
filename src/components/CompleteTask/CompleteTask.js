import React from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
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

const CompleteTask = ({ task }) => {
    const classes = useStyles({ priority: task.priority })
    const { changeTaskStatus } = useLocalStorage();

    const handleCheckBoxClick = () => {
        changeTaskStatus(task);
    }

    return (
        <Checkbox className={classes.checkBox} onClick={handleCheckBoxClick} />
    )
};

export default CompleteTask;