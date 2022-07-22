// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects () {
    return db('projects')
      .then((projects) => 
        projects.map((proj) => ({
            ...proj,
            project_completed: proj.project_completed ? true : false,
        }))
      )
      .catch((err) => console.log(err.message))
}

function postProject (project) {
    return db('projects')
        .insert(project, "project_id")
        .then(([project_id]) => db('projects').where({ project_id }))
        .then((projects) => 
            projects.map((proj) => ({
                ...proj,
                project_completed: proj.project_completed ? true : false,
            }))
        )
}
    
module.exports = { getProjects, postProject }