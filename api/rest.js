const Router = require('koa-router');
const { users, blogs } = require('../data');

let restRouter = new Router();

restRouter.get('/users/:id/blogs', (ctx) => {
  let { id } = ctx.params;
  let blogsByUser = blogs.filter(blog => blog.uid === id);
  ctx.body = blogsByUser;
});

restRouter.get('/users', (ctx) => { ctx.body = users });
restRouter.get('/blogs', (ctx) => { ctx.body = blogs });

module.exports = restRouter;