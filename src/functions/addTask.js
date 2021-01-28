export const addTask = (newTask) => {
    //Get tasks
    var tasks = window.localStorage.getItem('tasks');

    //Case 1: Tasks exist
    if(tasks !== null && tasks !== undefined) {
        tasks = JSON.parse(tasks);
    }
    //Case 2: Tasks don't exist
    else {
        tasks = {
            objects: [],
            id: 0,
        }
    }

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
}   