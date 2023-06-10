import { getDB } from "./dbService"

class MemesService {
  public get() {
    const db = getDB()
    return db.get("memes").take(50).value()
  }
}

export default MemesService
