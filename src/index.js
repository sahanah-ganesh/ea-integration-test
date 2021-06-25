const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const FestivalAPI = require('./data/festival-api')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      festivalAPI: new FestivalAPI()
    }
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
