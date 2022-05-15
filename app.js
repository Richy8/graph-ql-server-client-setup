// const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { req };
  },
});

// app.use("/graphql", graphqlHTTP({}));

server.listen(4000, () => {
  console.log("listening on port 4000");
});
