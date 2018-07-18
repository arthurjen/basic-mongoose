const Koa = require('koa');
const app = new Koa();
const path = require('path');

// const publicDir = path.resolve(__dirname, '../public');
// app.use(koa.static(publicDir));
// app.use(koa.json());

// const teams = require('./routes/teams-koa');
// app.use('/api/teams', teams);
var Router = require('koa-router');
var router = new Router();
const Team = require('./models/team');

router.get('/:id', (ctx, next) => {
    console.log(ctx);
    // console.log(ctx);
    // ctx.body = 'hello';
    // Team.findById(ctx.params.id)
    //     .then(team => ctx.body = team);
});

app
    .use(router.routes())
    .use(router.allowedMethods());

module.exports = app;