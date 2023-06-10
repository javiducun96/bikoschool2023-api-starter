import app from "../app"
import request from "supertest"

describe("GET /user", function () {
  it("memes endpoint exists", function (done) {
    request(app).get("/api/memes").expect(200, done)
  })

  it("memes endpoint return json", function (done) {
    request(app)
      .get("/api/memes")
      .expect("Content-Type", /application\/json/)
  })
})
