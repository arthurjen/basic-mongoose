const router = require('express').Router();
const Team = require('../models/team');

module.exports = router
    .post('/', (req, res) => {
        Team.create(req.body)
            .then(team => res.json(team));
    });