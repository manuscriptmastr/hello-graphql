const { makeExecutableSchema } = require('graphql-tools');
const { users, blogs } = require('./data');

let typeDefs = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blogs: [Blog]
  }

  type Blog {
    id: ID!
    title: String!
    content: String!
    author: User
  }

  type Query {
    user(id: ID!): User
    users: [User]
    blog(id: ID!): Blog
    blogs: [Blog]
  }
`;

let resolvers = {
  User: {
    blogs: ({ id }) => blogs.filter(blog => blog.uid === id)
  },
  Blog: {
    author: ({ uid }) => users.find(user => user.id === uid)
  },
  Query: {
    user: (_, { id }) => users.find(user => user.id === id),
    users: () => users,
    blog: (_, { id }) => blogs.find(blog => blog.id === id),
    blogs: () => blogs
  }
}

let schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;