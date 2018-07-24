const Router = require('koa-router');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');
const schema = require('../schema');

let gqlRouter = new Router();

gqlRouter.all('/graphql', graphqlKoa({ schema }));
gqlRouter.all('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = gqlRouter;