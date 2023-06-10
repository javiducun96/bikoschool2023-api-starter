import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"
import { DatabaseSchema } from "../interfaces/DatabaseSchema"

export function getDB() {
  const adapter = new FileSync<DatabaseSchema>("./data/db.json")
  const db = low(adapter)
  return db
}
