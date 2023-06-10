import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"

interface DatabaseSchema {
  memes: Meme[]
}

interface Meme {}

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
