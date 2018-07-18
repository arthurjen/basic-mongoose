// const router = require('express').Router();
const Router = require('koa-router');
const router = new Router();

const Team = require('../models/team');

module.exports = router
    .post('/', (req, res) => {
        Team.create(req.body)
            .then(team => res.json(team));
    })

    .get('/', ctx => {
        ctx.body = 'hello'
        // Team.find(req.query)
        //     .then(teams => res.json(teams));
    })

    .get('/:id', (req, res) => {
        Team.findById(req.params.id)
            .then(team => res.json(team));
    })

    .put('/:id', (req, res) => {
        Team.findByIdAndUpdate(
            req.params.id,
            req.body,
            { 
                new: true,
                runValidators: true
            })
            .then(team => res.json(team));
    })

    .delete('/:id', (req, res) => {
        Team.findByIdAndRemove(req.params.id)
            .then(() => res.json({ removed: true }));
    });