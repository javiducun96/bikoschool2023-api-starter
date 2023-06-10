import low, { LowdbSync } from "lowdb"
import FileSync from "lowdb/adapters/FileSync"
import { DatabaseSchema } from "../interfaces/DatabaseSchema"

export function createDB(dbPath: string) {
  const adapter = new FileSync<DatabaseSchema>(dbPath)
  const db = low(adapter)
  return db
}
