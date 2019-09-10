require('dotenv').config()
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'

const port = process.env.PORT || 5000

const resolvers = {
  Query: {
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
