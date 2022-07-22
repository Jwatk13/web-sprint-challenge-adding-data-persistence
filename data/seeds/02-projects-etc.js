const projects = [
  { project_name: 'Sprint Challenge', project_description: 'Challenge your skills with databases' },
  { project_name: 'Have Fun', project_completed: true },
  { project_name: 'Enjoy Summer' },
]

const resources = [
  { resource_name: 'Schema Builder | Knex.js', resource_description: 'A guide to schema building with knex library' },
  { resource_name: 'Lorem Ipsum', resource_description: 'Dolor sit amet consectetur adipsicing elit'},
]

const tasks = [
  { task_description: 'Sed do eiusmod tempor incididunt ut labore', 
    task_notes: 'et dolore magna aliqua',
    task_completed: true,
    project_id: 1, 
  },
  { task_description: 'Sed do eiusmod tempor ut labore', 
    task_notes: 'et dolore aliqua',
    project_id: 2, 
  }
]

const project_resources = [
  { resource_id: 2, project_id: 1 },
  { resource_id: 1, project_id: 3 },
]

exports.seed = async function(knex) {
  // Deletes ALL existing entries
 await knex('projects').insert(projects)
 await knex('resources').insert(resources)
 await knex('tasks').insert(tasks)
 await knex('project_resources').insert(project_resources)
};
