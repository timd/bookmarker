import { build } from "../helper";

const app = build();

describe('When serving routes', () => {

  it("should respond to /", async () => {
    const res = await app.inject({ url: "/" });
    expect(res.statusCode).toEqual(200);
  });
  
  it("should respond to /bookmarks", async () => {
    const res = await app.inject({ url: "/bookmarks" });
    expect(res.statusCode).toEqual(200);
  });

  it('should return 404 to a missing route', async () => {
    const res = await app.inject({ url: "/foobar" });
    expect(res.statusCode).toEqual(404);

  })

});

