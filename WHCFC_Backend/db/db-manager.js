import mysql from "mysql2/promise";
import { table_create_query } from "./table_query.js";

class DBManager {
  static #pool = null;

  /**
   *
   * @returns {DBManager} Instance of DBManager
   */
  static async getPool() {
    if (DBManager.#pool === null) {
      DBManager.#connect();
      await DBManager.#check();
    }

    return DBManager.#pool;
  }

  /**
   * Connect to database
   */
  static #connect() {
    DBManager.#pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      multipleStatements: true,
      connectionLimit: 10,
      waitForConnections: true,
      queueLimit: 10
    });

    console.log("Connected to database");
  }

  /**
  *
  */
  static async #check() {
    // Create table if it doesn't exist
    await DBManager.#pool.query(table_create_query);
    console.log("Table checked/created");
  }
}

export default DBManager;
