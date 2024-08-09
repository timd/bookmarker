import { FastifyPluginAsync } from 'fastify'

const bookmarkRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.get('/bookmark/:id', async function (request, reply) {
    const { id } = request.params as { id: number }

    const bookmark = {
      "id": id,
      "created_at": "20240808T123456Z",
      "url": "https://www.example.com/page.html",
      "title": "test title",
      "notes": "test notes",
      "tags": [
        {
          "id": 1234,
          "name": "abc"
        }
      ]
    }

    return bookmark;
  });

  fastify.get('/bookmarks', async function (request, reply) {
    
  const bookmarks = [
      {
        "id": "1234",
        "created_at": "20240808T123456Z",
        "url": "https://www.example.com/page.html",
        "title": "test title",
        "notes": "test notes",
        "tags": [
          {
            "id": 1234,
            "name": "abc"
          }
        ]
      },
      {
        "id": "9876",
        "created_at": "20240808T123456Z",
        "url": "https://www.example.de/page.html",
        "title": "test title 2",
        "notes": "test notes 2",
        "tags": [
          {
            "id": 1234,
            "name": "abc"
          }
        ]
      }
    ];
    
  return bookmarks;

  })

}

export default bookmarkRoutes;