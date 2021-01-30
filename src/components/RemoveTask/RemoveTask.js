import React from 'react';

//HOOKS
import { useLocalStorage } from 'hooks'

//MATERIAL UI
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';

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

export default RemoveTask;