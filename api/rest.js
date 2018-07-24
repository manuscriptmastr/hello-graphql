const Router = require('koa-router');
const { users, blogs } = require('../data');

let restRouter = new Router();

restRouter.get('/users/:id/blogs', (ctx) => {
  let { id } = ctx.params;
  let blogsByUser = blogs.filter(blog => blog.uid === id);
  ctx.body = blogsByUser;
});

restRouter.get('/blogs/:id/author', (ctx) => {
  let { id } = ctx.params;
  let blog = blogs.find(blog => blog.id === id);
  let { uid } = blog;
  let authorFromBlog = users.find(user => user.id === uid);
  ctx.body = authorFromBlog;
});

restRouter.get('/users/:id', (ctx) => {
  let { id } = ctx.params;
  ctx.body = users.find(user => user.id === id)
});

restRouter.get('/blogs/:id', (ctx) => {
  let { id } = ctx.params;
  ctx.body = blogs.find(blogs => blogs.id === id)
});

restRouter.get('/users', (ctx) => { ctx.body = users });
restRouter.get('/blogs', (ctx) => { ctx.body = blogs });

module.exports = restRouter;