import React, { useState } from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Calendar } from 'components';

//MATERIAL UI
import Tooltip from '@material-ui/core/Tooltip';

const TaskDate = ({task}) => {
    const [date, setDate] = useState(task ? task.date : undefined);
    const { changeTaskDueDate } = useLocalStorage();

    const handleDateChange = (newDate) => {
        setDate(newDate);
        changeTaskDueDate(task, newDate);
    }

    return (
        <div>
            <Tooltip title='Change Task due date'>
                <div>
                    <Calendar setDateCallback={handleDateChange} initialDate={date} />
                </div>
            </Tooltip>
        </div>
    )
};

export default TaskDate;