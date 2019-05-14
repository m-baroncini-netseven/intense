const express = require('express');
const cors = require('cors');
const { MockList } = require('graphql-tools');
const { ApolloServer, gql } = require('apollo-server-express');
const mocks = require('./src/mock');
const resolvers = require('./src/resolvers');
const schema = require('./src/schema');
const app = express();
app.use(cors());

const server = new ApolloServer({
    typeDefs: schema,
    mocks: mocks,
    mockEntireSchema: false,
    resolvers,
    introspection: true, // enables introspection of the schema
    playground: true, // enables the actual playground
})

server.applyMiddleware({ app, path: '/'});

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });