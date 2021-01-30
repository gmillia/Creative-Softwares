import React from 'react';

//HOOKS
import { useLocalStorage } from 'hooks'

//MATERIAL UI
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const RemoveTask = ({ task }) => {
    const { removeTask } = useLocalStorage();

    const handleRemoveTask = () => {
        removeTask(task);
    }

    return (
        <IconButton onClick={handleRemoveTask} >
            <CancelIcon style={{color: '#FF6159'}} />
        </IconButton>
    )
};

export default RemoveTask;