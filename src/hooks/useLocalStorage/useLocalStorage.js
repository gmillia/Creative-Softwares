import React, { useState, useEffect } from 'react';

const useLocalStorage = () => {

    const [tasksObj, setTasksObj] = useState(() => {
        let localTasks = window.localStorage.getItem('tasks');

        if(localTasks !== null && localTasks !== undefined) {
            return JSON.parse(localTasks);
        }

        return {
            objects: [],
            id: 0,
        }
    });
    const [tasks, setTasks] = useState(tasksObj && tasksObj.objects ? tasksObj.objects : []);
    const [total, setTotal] = useState(tasks && tasks.length ? tasks.length : 0)

    useEffect(() => {
        let isMounted = true;
        window.addEventListener('storage', () => {
            if(isMounted) {
                let localTasks = JSON.parse(window.localStorage.getItem('tasks'));
                setTasks(localTasks && localTasks.objects ? localTasks.objects : []);
                setTotal(localTasks && localTasks.objects ? localTasks.objects.length : 0)
            }
        })

        return () => {
            isMounted = false;
            window.removeEventListener('storage', () => {});
        }
    }, [])

    const triggerWindow = (newTasks) => {
        window.localStorage.setItem('tasks', JSON.stringify(newTasks));
        window.dispatchEvent(new Event('storage'));
    }

    const addTask = (newTask) => {
        //Assing id
        newTask.id = tasksObj.id;
        //Check for valid task name
        newTask.name = newTask.name.length ? newTask.name : 'Task ' + newTask.id;
        //Add new task to tasks list
        tasks.push(newTask);
        //Increment id
        tasksObj.id += 1;

        tasksObj.objects = tasks;
        //Save object
        triggerWindow(tasksObj);
    }

    const removeTask = (taskToRemove) => {
        let newTasks = tasks.filter(obj => obj.id !== taskToRemove.id);
        tasksObj.objects = newTasks;
        tasksObj.id = tasksObj.id - 1;

        triggerWindow(tasksObj);
    }

    const changeTaskStatus = (taskToChange) => {
        let changedTask = tasks.find(obj => obj.id === taskToChange.id);
        if(changedTask) changedTask.completed = !changedTask.completed;
        tasksObj.objects = tasks;
        triggerWindow(tasksObj);
    }

    const changeTaskPriority = (taskToChange, newPriority) => {
        let changedTask = tasks.find(obj => obj.id === taskToChange.id);
        if(changedTask) changedTask.priority = newPriority;
        tasksObj.objects = tasks;
        triggerWindow(tasksObj);
    }

    const changeTaskDueDate = (taskToChange, newDate) => {
        let changedTask = tasks.find(obj => obj.id === taskToChange.id);
        if(changedTask) changedTask.date = newDate;
        tasksObj.objects = tasks;
        triggerWindow(tasksObj);
    }

    return {
        total,
        tasks, 
        addTask,
        removeTask,
        changeTaskStatus,
        changeTaskPriority,
        changeTaskDueDate,
    }
};

export default useLocalStorage;