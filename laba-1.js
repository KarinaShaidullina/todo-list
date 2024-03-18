// console.log("Hello, World!");
import chalk from 'chalk';

const tasks = [
    {
        'id': `1`,
        'title': `Выучить JS`,
        'status': `backlog`,
    },
    {
        'id': `2`,
        'title': `Выучить React`,
        'status': `backlog`,
    },
    {
        'id': `3`,
        'title': `Сделать домашку`,
        'status': `backlog`,
    },
    {
        'id': `4`,
        'title': `Выпить смузи`,
        'status': `processing`,
    },
    {
        'id': `5`,
        'title': `Попить воды`,
        'status': `processing`,
    },
    {
        'id': `6`,
        'title': `Позвонить маме`,
        'status': `done`,
    },
    {
        'id': `7`,
        'title': `Погладить кота`,
        'status': `done`,
    },
    {
        'id': `8`,
        'title': `Сходить погулять`,
        'status': `basket`,
    },
    {
        'id': `9`,
        'title': `Прочитать Войну и Мир`,
        'status': `error`,
    }
]

// function printTasks(tasks) {
//     for (const task of tasks) {
//         console.log(chalk.blue(`ID: ${task.id}`), `Title: ${task.title}`, chalk.red(`Status: ${task.status}`));
//     }
// }

// printTasks(tasks);


function printTasks(tasks) {
    for (const task of tasks) {
        let messageColor;

        if (task.status === 'error') {
            messageColor = chalk.red;
        } else {
            messageColor = chalk.blue;
        }

        console.log(messageColor(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`));
    }
}

printTasks(tasks);