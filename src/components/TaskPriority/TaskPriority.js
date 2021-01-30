import React, { useState } from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { PriorityButtons } from 'components';

const TaskPriority = ({ task }) => {
    const [priority, setPriority] = useState(task ? task.priority : undefined);
    const { changeTaskPriority } = useLocalStorage();

    const handlePriorityChange = (newPriority) => {
        setPriority(newPriority);
        changeTaskPriority(task, newPriority);
    };

    return (
        <PriorityButtons setPriorityCallback={handlePriorityChange} initialPriority={priority} />
    )
};

export default TaskPriority