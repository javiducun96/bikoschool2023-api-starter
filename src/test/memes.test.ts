import { response } from "express"
import app from "../app"
import request from "supertest"

describe("Memes endpoint", function () {
  it("exists", async () => await request(app).get("/api/memes").expect(200))

  it("return json", async () =>
    await request(app)
      .get("/api/memes")
      .expect(200)
      .expect("Content-Type", /application\/json/))

  it("response is array", async () => {
    const response = await request(app).get("/api/memes").expect(200)
    expect(response.body).toBeInstanceOf(Array)
  })

  it("response returns 50 memes", async () => {
    const response = await request(app).get("/api/memes").expect(200)
    expect(response.body).toHaveLength(50)
  })
})
