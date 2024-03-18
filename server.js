import express from 'express';
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







// import fs from 'fs';
// import  http from 'http';
// import { TaskManager } from './task-manager.js';

// const server = http.createServer((req, res) => {
//     fs.readFile('tasks.json', 'utf8', (err, data) => {
//         if (err) {
//             res.writeHead(500, {'Content-Type': 'text/plain'});
//             res.end("Error reading file.");
//             return;
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(data);
//     });
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });


// const taskManager = new TaskManager();

// taskManager.loadTasks();

// // Добавление задачи
// taskManager.on('taskCreated', (task) => {
//     console.log(`Task added: ${task.description}`);
// });

// taskManager.addTask(9, 'Сварить суп', 'done');

// // Удаление задачи
// taskManager.on('taskDeleted', (task) => {
//     console.log(`Task deleted: ${task.description}`);
// });

// taskManager.deleteTask(9);

// // Обновление статуса задачи
// taskManager.on('taskUpdated', (task) => {
//     console.log(`Task updated: ${task.id}, New status: ${task.status}`);
// });


// taskManager.updateTaskStatus(8, 'processing');

// taskManager.printTasks();

