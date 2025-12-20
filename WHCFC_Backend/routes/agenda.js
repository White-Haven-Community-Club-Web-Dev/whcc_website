import express from "express";
import DBManager from "../db/db-manager.js";
import logger from "../logger/logger.js";

const router = express.Router();

router.route("/all-agendas").get(async (req, res) => {
  const sql =
    "SELECT * FROM agenda WHERE MONTH(date) >= MONTH(CURRENT_DATE()) ORDER BY date ASC, time ASC";

  try {
    var results = await DBManager.execute(sql);
    res.json(results).status(200);
  } catch (error) {
    logger.error(error);
  }
});

router.route("/add-agenda").post(async (req, res) => {
  const { title, date, time, category, description, location, team1, team2 } = req.body;

  const sql =
    "INSERT INTO agenda (title, date, time, category, description, location, team1, team2) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  const values = [
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
    await DBManager.execute(sql, values);
    res.json("Agenda added successfully").status(200);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error });
  }
});

export default router;
