import { TaskManager } from './task-manager.js';

const taskManager = new TaskManager();

taskManager.loadTasks();

taskManager.printTasks();





// import { Task } from "./task.js";

// const tasks = [
//     new Task(1, 'Бэклог', 'Погладить кота'),
//     new Task(2, 'В процессе', 'Сходить погулять'),
//     new Task(3, 'Завершен', 'Позвонить маме')
// ]

 
// for(let task of tasks){
//     console.log(task.toString());
// }