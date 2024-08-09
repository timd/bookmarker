import Fastify from 'fastify'
import { app, options } from './app'

const server = Fastify(options)

// Register your app
server.register(app)

// Set the port number
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

// Start the server
const start = async () => {
  try {
    await server.listen({ port: PORT })
    console.log(`Server is running on port ${PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()