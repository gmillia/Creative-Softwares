import React, { useState } from 'react';
import PropTypes from 'prop-types';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { PriorityButtons } from 'components';

/**
 * Component whcih displays Priority Buttons for the task. Is able to change the priority of the existing task.
 * @param {*} param0 
 */
const TaskPriority = ({ task }) => {
    const [priority, setPriority] = useState(task ? task.priority : undefined);
    const { changeTaskPriority } = useLocalStorage();

    const handlePriorityChange = (newPriority) => {
        setPriority(newPriority);
        changeTaskPriority(task, newPriority);
    };

    return (
        <PriorityButtons setPriorityCallback={handlePriorityChange} task={task} />
    )
};

TaskPriority.propTypes = {
    task: PropTypes.object,
}

export default TaskPriority