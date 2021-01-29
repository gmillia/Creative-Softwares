import React from 'react';
const ordinal = require('ordinal')

const TaskDueDate = ({ task }) => {
    const date = new Date(task.date);
    const month = date.toLocaleString('en-us', { month: 'short' });
    const day = ordinal(date.getDate());
    const year = date.getFullYear();

    return (
        <div>{month} {day}, {year}</div>
    )
};

export default TaskDueDate;