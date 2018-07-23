const Router = require('koa-router');
const router = new Router();
const Team = require('../models/team');

module.exports = router
    .post('/', ctx => {
        return Team.create(ctx.request.body)
            .then(team => ctx.body = team);
    })

    .get('/', async ctx => {
        return Team.find(ctx.query)
            .then(teams => {
                ctx.body = teams;
            });
    })

    .get('/:id', async ctx => {
        return Team.findById(ctx.params.id)
            .then(team => ctx.body = team);
    });

    // .put('/:id', (req, res) => {
    //     Team.findByIdAndUpdate(
    //         req.params.id,
    //         req.body,
    //         { 
    //             new: true,
    //             runValidators: true
    //         })
    //         .then(team => res.json(team));
    // })

    // .delete('/:id', (req, res) => {
    //     Team.findByIdAndRemove(req.params.id)
    //         .then(() => res.json({ removed: true }));
    // });