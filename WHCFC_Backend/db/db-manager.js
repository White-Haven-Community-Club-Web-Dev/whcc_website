import mysql from "mysql2/promise";
import { table_create_query } from "./table_query.js";

class DBManager {
  static #pool = null;

  /**
   * Get the shared database connection pool (for power users)
   *
   * @returns {mysql.Pool} Pool connection
   *
   * @throws {Error} When database is not initialized
   */
  static getPool() {
    if (DBManager.#pool === null)
      throw new Error("Database not initialized");

    return DBManager.#pool;
  }

  /**
   * Execute DBMS query
   *
   * @param {string} sql - SQL query
   * @param {any[]} [params=[]] - Placeholder for "?"
   *
   * @returns {Object[]|Object} If the query is a SELECT, returns an array of row objects. For non-SELECT queries (INSERT/UPDATE/DELETE), returns a ResultSetHeader-like object with metadata (e.g., affectedRows, insertId)
   *
   * @throws {Error} When database not initialized
   * @throws {Error} When query fails
   */
  static async execute(sql, params = []) {
    if (DBManager.#pool === null)
      throw new Error("database not initialized");

    try {
      const [results] = await DBManager.#pool.execute(sql, params);
      return results;
    } catch (error) {
      console.error("Database query failed");
      console.error(error);
      throw error;
    }
  }

  /**
   * Create connection pool
   *
   * @param {Object} config - Configuration for createPool
   * 
   * @throws {Error} Database is already connected
   * @throws {Error} Missing database configuration
   * @throws {Error} Missing required inputs (host, user, database, password)
   * @throws {Error} When failing to connect to database
   */
  static async createPool(config) {
    if (DBManager.#pool)
      throw new Error("Connection pool already created");

    if (!config || typeof config !== "object")
      throw new Error("Missing database config");

    const { host, user, database, password } = config;

    if (!host)
      throw new Error("Missing host in config");

    if (!user)
      throw new Error("Missing user in config");

    if (!database)
      throw new Error("Missing database in config");

    if (!password)
      throw new Error("Missing password in config");

    try {
      DBManager.#pool = mysql.createPool(config);
      console.log("Created connection pool");
    } catch (error) {
      DBManager.#pool = null;

      console.error("Error creating connection pool");
      console.error(error);
      throw error;
    }

    await DBManager.#check();
  }

  /**
   * Close connection pool
   *
   * @throws {Error} When not connected to the database
   * @throws {Error} When failing to disconnect from database
   */
  static async close() {
    if (!DBManager.#pool)
      throw new Error("No connection pool created");

    try {
      await DBManager.#pool.end();
      DBManager.#pool = null;
      console.log("Connection pool closed");
    }
    catch (error) {
      console.error("Error closing connection pool");
      console.error(error);
      throw error;
    }
  }

  /**
   * Check if table is created. If not, create it
   *
   * @throws {Error} When failing to check or create table
   */
  static async #check() {
    try {
      // Create table if it doesn't exist
      await DBManager.#pool.query(table_create_query);
      console.log("Table checked/created");
    }
    catch (error) {
      console.error("Error checking/creating table");
      console.error(error);

      // Close pool connection
      try {
        await DBManager.#pool.end();
        DBManager.#pool = null;
      }
      catch (error) {
        console.warn("Additionally: failed to close connection pool");
      }

      throw error;
    }
  }
}

export default DBManager;
