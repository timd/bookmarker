import { FastifyPluginAsync } from 'fastify'

const bookmarks: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/bookmarks', async function (request, reply) {
    return { bookmarks: true }
  })
}

export default bookmarks;
