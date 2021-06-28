// read .env if in production or .env.development if in development
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
})
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers } from './graphql/resolvers'
import FestivalAPI from './data/festival-api'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema('./src/graphql/schema.graphql')

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      festivalAPI: new FestivalAPI(),
    }
  },
})

server.applyMiddleware({
  app,
  // http://localhost:4000/graphql for graphQL playground
  path: '/graphql',
  // cors needs to be specified for apollo studio to work. reference: https://github.com/apollographql/apollo-server/issues/1142#issuecomment-486657060
  cors: {
    credentials: true,
    origin: true,
  },
})

app.listen(process.env.PORT, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`)
})
