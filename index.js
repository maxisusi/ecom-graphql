const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { products, categories, reviews } = require('./db');

const { Mutation } = require('./resolvers/Mutation');
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is ready at', url);
});
