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
    })

    .put('/:id', ctx => {
        return Team.findByIdAndUpdate(
            ctx.params.id,
            ctx.request.body,
            { 
                new: true,
                runValidators: true
            })
            .then(team => ctx.body = team);
    })

    .delete('/:id', ctx => {
        return Team.findByIdAndRemove(ctx.params.id)
            .then(() => ctx.body = { removed: true });
    });