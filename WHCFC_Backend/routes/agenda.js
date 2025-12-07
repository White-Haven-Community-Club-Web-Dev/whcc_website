import express from "express";
import DBManager from "../db/db-manager.js";

const router = express.Router();

router.route("/all-agendas").get(async (req, res) => {
  const sql =
    "SELECT * FROM agenda WHERE MONTH(date) >= MONTH(CURRENT_DATE()) ORDER BY date ASC, time ASC";

  try {
    const pool = await DBManager.getPool();

    var result = await pool.query(sql);
    res.json(result[0]).status(200);
  } catch (error) {
    console.log(error);
  }
});

router.route("/add-agenda").post(async (req, res) => {
  const { title, date, time, category, description, location, team1, team2 } = req.body;

  const sql =
    "INSERT INTO agenda (title, date, time, category, description, location, team1, team2) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  var values = [
    title,
    date,
    time,
    category,
    description,
    location,
    team1,
    team2,
  ];

  try {
    const pool = await DBManager.getPool();

    await pool.execute(sql, values);
    res.json("Agenda added successfully").status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

export default router;
