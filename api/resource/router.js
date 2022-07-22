// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

module.exports = router;