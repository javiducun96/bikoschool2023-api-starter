import express, { Express, Router, Request, Response } from "express"
import MemesService from "../services/memes"

const router: Router = express.Router()
router.get("/", async (req: Request, res: Response) => {
  const memesService = new MemesService()
  const response = memesService.get()

  res.setHeader("Content-Type", "application/json")
  res.json(response)
})

export default router
