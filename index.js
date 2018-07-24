const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const restRouter = require('./api/rest');
const gqlRouter = require('./api/graphql');

router.use(restRouter.routes());
router.use(gqlRouter.routes());

app.use(bodyParser());
app.use(router.routes());

app.listen(3002);