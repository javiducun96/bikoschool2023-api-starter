import { response } from "express"
import app from "../app"
import request from "supertest"

describe("Memes endpoint", function () {
  it("exists", function (done) {
    request(app).get("/api/memes").expect(200, done)
  })

  it("return json", function (done) {
    request(app)
      .get("/api/memes")
      .expect("Content-Type", /application\/json/)
      .expect(200, done)
  })

  it("response is array", function () {
    request(app)
      .get("/api/memes")
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
      })
  })
})
