import express, { Express, Router, Request, Response } from "express"

const router: Router = express.Router()
router.get("/", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  res.json([])
})

export default router
