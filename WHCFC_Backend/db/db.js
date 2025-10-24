import mysql from "mysql2/promise";
import "dotenv/config";
import { table_create_query } from "./table_query.js";

async function initializeDatabase() {
  try {
    // Create connection to MySQL database
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      multipleStatements: true,
    });
    console.log("Connected to database");

    // Create table if it doesn't exist
    await db.query(table_create_query);
    console.log("Table checked/created");

    return db;
  } catch (error) {
    console.error("Error connecting to the database: ", error);
    throw error;
  }
}

const db = await initializeDatabase();
export default db;
