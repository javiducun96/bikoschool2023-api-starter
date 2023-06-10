import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"
import { DatabaseSchema } from "../interfaces/DatabaseSchema"

function getDB() {
  const adapter = new FileSync<DatabaseSchema>("./data/db.json")
  const db = low(adapter)
  return db
}

class MemesService {
  public get() {
    const db = getDB()
    return db.get("memes").take(50).value()
  }
}

export default MemesService
