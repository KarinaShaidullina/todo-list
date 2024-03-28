// import { TaskManager } from './task-manager.js';
import mongoose from 'mongoose';
import 'dotenv/config';


const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// const manager = new TaskManager();
// manager.loadTasks();
// setTimeout(() => manager.printTasks(), 1000);

// const taskManager = new TaskManager();

// taskManager.loadTasks();

// taskManager.printTasks();





// import { Task } from "./task.js";

// const tasks = [
//     new Task(1, 'Бэклог', 'Погладить кота'),
//     new Task(2, 'В процессе', 'Сходить погулять'),
//     new Task(3, 'Завершен', 'Позвонить маме')
// ]

 
// for(let task of tasks){
//     console.log(task.toString());
// }