import React, { useState } from 'react';
import PropTypes from 'prop-types';

//HOOKS
import { useLocalStorage } from 'hooks';

//COMPONENTS
import { Calendar } from 'components';

//MATERIAL UI
import Tooltip from '@material-ui/core/Tooltip';

/**
 * Component used to display Calendar for the Task, and to (possibly) change Task due date (if needed).
 * @param {Object} task Task object. 
 */
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

TaskDate.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskDate;