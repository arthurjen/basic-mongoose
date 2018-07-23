const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();
const teams = require('./routes/teams');

app.use(async(ctx, next) => {
    try {
        await next();
    } catch(err) {
        ctx.status = 400;
        ctx.body = `Uh-oh: ${err.message}`;
        console.log('Error handler:', err.message);
    }
});

const bodyParser = require('koa-json-body');
app.use(bodyParser());

router.use('/api/teams', teams.routes(), teams.allowedMethods());

app.use(router.routes());
module.exports = app;