import app from "../app"
import request from "supertest"

describe("GET /user", function () {
  it("memes endpoint exists", function (done) {
    request(app).get("/memes").expect(200, done)
  })

  it("memes endpoint return json", function (done) {
    request(app).get("/memes").expect("Content-Type", /json/)
  })
})
