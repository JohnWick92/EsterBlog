import 'reflect-metadata'

import { BloggerResolver } from './src/resolvers/BloggerResolver'
import { PostResolver } from './src/resolvers/PostResolver'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { context } from './context'
import path from 'path'

async function startServer() {
  const schema = await buildSchema({
    resolvers: [PostResolver, BloggerResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })
  const server = new ApolloServer({
    schema,
    context,
  })
  const { url } = await server.listen()
  console.log(`Server running at ${url}`)
}

startServer()
