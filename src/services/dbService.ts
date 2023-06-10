import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"
import { DatabaseSchema } from "../interfaces/DatabaseSchema"

export class DB {
  private db: low.LowdbSync<DatabaseSchema>
  constructor(dbPath: string) {
    const adapter = new FileSync<DatabaseSchema>("./data/db.json")
    this.db = low(adapter)
  }

  public getDB() {
    return this.db
  }
}
