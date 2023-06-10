import express, { Express } from "express"
import morgan from "morgan"
import { createMemesRouter } from "./routes/memes"
import { LowdbSync } from "lowdb"
import { DatabaseSchema } from "./interfaces/DatabaseSchema"

export function createApp(db: LowdbSync<DatabaseSchema>) {
  const app: Express = express()
  app.use(morgan("dev"))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use("/api/memes", createMemesRouter(db))
  return app
}

export default { createApp }
