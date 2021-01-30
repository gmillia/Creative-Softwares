import React, { useState } from 'react';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Calendar } from 'components';

const TaskDate = ({task}) => {
    const [date, setDate] = useState(task ? task.date : undefined);
    const { changeTaskDueDate } = useLocalStorage();

    const handleDateChange = (newDate) => {
        setDate(newDate);
        changeTaskDueDate(task, newDate);
    }

    return (
        <Calendar setDateCallback={handleDateChange} initialDate={date} />
    )
};

export default TaskDate;