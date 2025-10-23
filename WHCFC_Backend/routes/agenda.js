import express from "express";
import db from "../db/db.js";

const router = express.Router();

router.route("/all-agendas").get(async (req, res) => {
  var sql =
    "SELECT * FROM agenda WHERE MONTH(date) >= MONTH(CURRENT_DATE()) ORDER BY date ASC, time ASC";

  try {
    var result = await db.query(sql);
    res.json(result[0]).status(200);
  } catch (error) {
    console.log(error);
  }
});

router.route("/add-agenda").post(async (req, res) => {
  var sql =
    "INSERT INTO agenda (title, date, time, category, description, location, team1, team2) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  var values = [
    req.body.title,
    req.body.date,
    req.body.time,
    req.body.category,
    req.body.description,
    req.body.location,
    req.body.team1,
    req.body.team2,
  ];
  try {
    await db.execute(sql, values);
    res.json("Agenda added successfully").status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

export default router;
