import React, { useState, useEffect } from 'react';

const useLocalStorage = () => {

    const [tasks, setTasks] = useState(() => {
        let localTasks = window.localStorage.getItem('tasks');

        if(localTasks !== null && localTasks !== undefined) {
            return JSON.parse(localTasks);
        }

        return {
            objects: [],
            id: 0,
        }
    });
    const [total, setTotal] = useState(tasks.objects.length)

    useEffect(() => {
        let isMounted = true;
        window.addEventListener('storage', () => {
            //setTasks(JSON.parse(window.localStorage.getItem('tasks')));
            if(isMounted) {
                setTasks(JSON.parse(window.localStorage.getItem('tasks')));
            }
        })

        return () => {
            isMounted = false;
            window.removeEventListener('storage', () => {});
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
        window.dispatchEvent(new Event('storage'));
    }

    return {
        total,
        tasks, 
        addTask
    }
};

export default useLocalStorage;