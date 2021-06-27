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
  introspection: true,
  playground: true,
  dataSources: () => {
    return {
      festivalAPI: new FestivalAPI(),
    }
  },
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(process.env.PORT, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`)
})
