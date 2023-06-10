import { response } from "express"
import app from "../app"
import request from "supertest"

describe("Memes endpoint", function () {
  it("exists", function (done) {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then(() => done())
  })

  it("return json", function (done) {
    request(app)
      .get("/api/memes")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then(() => done())
  })

  it("response is array", function (done) {
    request(app)
      .get("/api/memes")
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array)
        done()
      })
  })
})
