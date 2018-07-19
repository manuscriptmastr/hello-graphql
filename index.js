const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');
const schema = require('./schema');

const app = new Koa();
const router = new Router();

router.all('/graphql', graphqlKoa({ schema }));
router.all('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(bodyParser());
app.use(router.routes());

app.listen(3002);