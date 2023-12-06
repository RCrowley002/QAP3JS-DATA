const express = require("express");
const router = express.Router();
const pool = require("../db"); // Import the database pool

// route to get all cars
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("Select * From exotic_cars");
    res.render("carsIndex", { cars: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
