import React, { useState, useEffect } from 'react';

const useLocalStorage = () => {
    const [tasks, setTasks] = useState({
        objects: [],
        id: 0,
    });

    useEffect(() => {
        let localTasks = window.localStorage.getItem('tasks');

        if(localTasks !== null && localTasks !== undefined) {
            setTasks(JSON.parse(localTasks));
        }
    }, [])

    const addTask = (newTask) => {
        //Assing id
        newTask.id = tasks.id;
        //Check for valid task name
        newTask.name = newTask.name.length ? newTask.name : 'Task ' + newTask.id;
        //Add new task to tasks list
        tasks.objects.push(newTask);
        //Increment id
        tasks.id += 1;

        //Save object
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(tasks);
    }

    return {
        tasks,
        addTask,
    }
};

export default useLocalStorage;