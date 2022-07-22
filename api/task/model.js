// build your `Task` model here
const db = require('../../data/dbConfig');

function findTasks() {
    return db('tasks as t')
        .leftJoin('projects as pr', 't.project_id', 'pr.project_id')
        .select(
            't.task_id', 
            't.task_description', 
            't.task_notes', 
            't.task_completed', 
            'pr.project_name', 
            'pr.project_description'
        )
        .then((tasks) => 
            tasks.map((tas) => ({
             ...tas,
                task_completed: tas.task_completed ? true : false,
            }))
        )
        .catch((err) => console.log(err.message))
}

async function insertTask(task) {
    const rows =  await db('tasks')
        .insert(task)
        .then(([task_id]) => db('tasks').where({ task_id }))
        .then((tasks) => 
            tasks.map((tas) => ({
                ...tas,
                task_completed: tas.task_completed ? true : false,
            }))
        )
    return rows[0];
}

module.exports = { findTasks, insertTask }