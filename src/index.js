require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const TrainAPI = require('./datasources/train')

const port = process.env.PORT || 5000

const dataSources = () => {
  return {
    trainAPI: new TrainAPI()
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
})

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
