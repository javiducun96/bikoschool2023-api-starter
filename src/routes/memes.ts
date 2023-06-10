import express, { Express, Router, Request, Response } from "express"
import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"

interface DatabaseSchema {
  memes: Meme[]
}

interface Meme {}

const router: Router = express.Router()
router.get("/", async (req: Request, res: Response) => {
  const adapter = new FileSync<DatabaseSchema>("./data/db.json")
  const db = low(adapter)
  const response = db.get("memes").take(50).value()

  res.setHeader("Content-Type", "application/json")
  res.json(response)
})

export default router
