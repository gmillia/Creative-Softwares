import { useState, useEffect } from 'react';

/**
 * Hook responsible for managing the local storage usage specific for the app.
 */
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

    ///Effect used to listen to changes in the local storage.
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

    //Function used to set local storage tasks AND trigger window event so that we can observe local storage change in the current tab (window)
    const triggerWindow = (newTasks) => {
        window.localStorage.setItem('tasks', JSON.stringify(newTasks));
        window.dispatchEvent(new Event('storage'));
    }

    //Function used to add new task to the local storage
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

    //Function used to remove task from the local storage
    const removeTask = (taskToRemove) => {
        let newTasks = tasks.filter(obj => obj.id !== taskToRemove.id);
        tasksObj.objects = newTasks;
        tasksObj.id = tasksObj.id - 1;

        triggerWindow(tasksObj);
    }

    //Function used to change existing task status (completed/not-completed)
    const changeTaskStatus = (taskToChange) => {
        let changedTask = tasks.find(obj => obj.id === taskToChange.id);
        if(changedTask) changedTask.completed = !changedTask.completed;
        tasksObj.objects = tasks;
        triggerWindow(tasksObj);
    }

    //Function used to change existing task priority.
    const changeTaskPriority = (taskToChange, newPriority) => {
        let changedTask = tasks.find(obj => obj.id === taskToChange.id);
        if(changedTask) changedTask.priority = newPriority;
        tasksObj.objects = tasks;
        triggerWindow(tasksObj);
    }

    //Function used to change existing task due date.
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