import 'reflect-metadata'

import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { PostResolver } from './src/resolvers/PostResolver'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { context } from './context'
import router from './src/Routes'
import express from 'express'
import path from 'path'
import http from 'http'
import cors from 'cors'

async function startServer() {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(cors())
  app.use(router)
  const httpServer = http.createServer(app)
  const schema = await buildSchema({
    resolvers: [PostResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })
  const server = new ApolloServer({
    schema,
    context,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  await server.start()
  server.applyMiddleware({ app })
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  )
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

startServer()
