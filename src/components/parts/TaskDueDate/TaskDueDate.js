import React from 'react';
import PropTypes from 'prop-types';

//USED TO ADD ORDINALS TO THE END OF NUMBERS
const ordinal = require('ordinal');

/**
 * Component which displays Task due date. 
 * @param {Object} task Task object 
 */
const TaskDueDate = ({ task }) => {
    const date = new Date(task.date);
    const month = date.toLocaleString('en-us', { month: 'short' });
    const day = ordinal(date.getDate());
    const year = date.getFullYear();

    return (
        <div>{month} {day}, {year}</div>
    )
};

TaskDueDate.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskDueDate;