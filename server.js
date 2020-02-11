const { ApolloServer, gql } = require("apollo-server");
const knex = require("knex")({
  client: "pg",
  connection:
    process.env.PG_CONNECTION_STRING ||
    "postres://rafa:password@localhost/resume",
  searchPath: ["knex", "public"]
});

// const port = process.env.PORT || 4000;

const typeDefs = gql`
  type Basic {
    name: String
    day: String
    month: String
    year: String
    gender: String
  }

  type Query {
    basic: Basic
  }

  type Mutation {
    addInfo(
      name: String
      day: String
      month: String
      year: String
      gender: String
    ): Basic
  }
`;

const resolvers = {
  Query: {
    basic: () => {
      return knex("basic")
        .select()
        .then(basic => {
          return basic;
        });
    }
  },
  Mutation: {
    addInfo: async (parent, info) => {
      return knex("basic")
        .insert({
          name: info.name,
          day: info.day,
          month: info.month,
          year: info.year,
          gender: info.gender
        })
        .then(quote => quote);
    }
  }
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
