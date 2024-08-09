import { FastifyPluginAsync } from 'fastify'

const tagRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.get('/tag/:name', async function (request, reply) {
    const { name } = request.params as { name: string }

    const expectedBookmark = {
        id: 1234,
        created_at: '20240808T123456Z',
        url: 'https://www.example.com/page.html',
        title: 'test title',
        notes: 'test notes',
        tags: [
          { 
            id: 1234,
            name: name
          }
        ]
      }
  
      const tag = {
        id: '1234',
        name: name,
        bookmarks: [expectedBookmark]
      }

    return { tag }
  })

  fastify.get('/tags', async function (request, reply) {
    return { bookmarks: 'not yet implemented' }
  })

}

export default tagRoutes;