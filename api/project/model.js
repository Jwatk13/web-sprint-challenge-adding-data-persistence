// build your `Project` model here
const db = require('../../data/dbConfig');

function findProjects () {
    return db('projects')
      .then((projects) => 
        projects.map((proj) => ({
            ...proj,
            project_completed: proj.project_completed ? true : false,
        }))
      )
      .catch((err) => console.log(err.message))
}

async function insertProject (project) {
   const rows =  await db('projects')
        .insert(project)
        .then(([project_id]) => db('projects').where({ project_id }))
        .then((projects) => 
            projects.map((proj) => ({
                ...proj,
                project_completed: proj.project_completed ? true : false,
            }))
        )
    return rows[0];
}
    
module.exports = { findProjects, insertProject }