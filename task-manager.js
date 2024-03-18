import fs from "fs";
import { Task } from "./task.js";
import { EventEmitter } from "events";

export class TaskManager extends EventEmitter {
    constructor() {
        super();
        this.tasks = [];
    }

    loadTasks() {
        try {
            const data = fs.readFileSync('tasks.json', 'utf8');
            const tasksArray = JSON.parse(data);
            this.tasks = tasksArray.map(task => new Task(task.id, task.description, task.status));
        } catch (err) {
            console.error('Ошибка', err);
        }
    }
    
    printTasks() {
        console.log('Tasks:');
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
        });
    }
    
    addTask(id, description, status) {
        const task = { id, description, status};
        this.tasks.push(task);
        this.emit('taskCreated', task);
        this.saveTasks('tasks.json');
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.emit("taskDeleted", taskId);
        this.saveTasks('tasks.json');
    }

    updateTaskStatus(id, newStatus) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].status = newStatus;
            this.emit('taskUpdated', this.tasks[taskIndex]);
            this.saveTasks('tasks.json');
        } else {
            console.error("Task not found with id:", id);
        }
    }

    saveTasks(filename) {
        try {
            const tasksArray = this.tasks.map(task => ({ id: task.id, description: task.description, status: task.status }));
            fs.writeFileSync(filename, JSON.stringify(tasksArray, null, 2));
            console.log('Задача успешно сохранена');
        } catch (err) {
            console.error('Ошибка', err);
        }
    }
}

