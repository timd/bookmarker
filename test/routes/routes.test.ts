import { build } from "../helper";

const app = build();

describe('When serving routes', () => {

  describe('the root', () => {

    it("should respond to /", async () => {
      const res = await app.inject({ url: "/" });
      expect(res.statusCode).toEqual(200);
    });

  })

  describe('bookmarks', () => {

    it("should respond to /bookmarks with an array of bookmarks", async () => {
      const res = await app.inject({ url: "/bookmarks" });
      expect(res.json()).toEqual(
        [
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
        ]
      );
    });

    it("should respond to /bookmark/123 with a bookmark", async () => {
      const res = await app.inject({ url: "/bookmark/1234" });
      expect(res.json()).toEqual(
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
        }
      );
    });

  })

  describe('tags', () => {

    it("should respond to /tags", async () => {
      const res = await app.inject({ url: "/tags" });
      expect(res.statusCode).toEqual(200);
    });

    it("should respond to /tag/abc", async () => {
      const res = await app.inject({ url: "/tag/abc" });
      expect(res.statusCode).toEqual(200);
    });

    it("should respond to /tag/abc and return a list of bookmarks parameter", async () => {
      const res = await app.inject({ url: "/tag/abc" });

      console.log(res.json())

      expect(res.json()).toEqual({
          "tag": {
            "id": "1234",
            "name": "abc",
            "bookmarks": [
              {
                "id": 1234,
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
            ]
          }
      });
    });

  })

  describe('invalid', () => {

    it('should return 404 to a missing route', async () => {
      const res = await app.inject({ url: "/foobar" });
      expect(res.statusCode).toEqual(404);
  
    })

  })

});

