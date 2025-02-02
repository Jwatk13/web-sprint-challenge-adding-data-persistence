// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.findProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.insertProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router;