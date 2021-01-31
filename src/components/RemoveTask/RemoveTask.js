import React from 'react';
import PropTypes from 'prop-types';

//HOOKS
import { useLocalStorage } from 'hooks'

//MATERIAL UI
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';

/**
 * Component which displays Close button used to remove Task from Tasks.
 * 
 * @param {Object} task Task object. 
 */
const RemoveTask = ({ task }) => {
    const { removeTask } = useLocalStorage();

    const handleRemoveTask = () => {
        removeTask(task);
    }

    return (
        <div>
            <Tooltip title='Remove task'>
                <IconButton onClick={handleRemoveTask} >
                    <CancelIcon style={{color: '#FF6159'}} />
                </IconButton>
            </Tooltip>
        </div>
    )
};

RemoveTask.propTypes = {
    task: PropTypes.object.isRequired,
}

export default RemoveTask;