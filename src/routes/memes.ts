import express, { Express, Router, Request, Response } from "express"

const router: Router = express.Router()
router.get("/", async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify({ a: 1 }))
})

export default router
