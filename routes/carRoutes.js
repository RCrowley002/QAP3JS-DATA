const express = require("express");
const router = express.Router();
const dal = require("../dal/cars");
// route to get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await dal.getCars();
    res.render("carsIndex", { cars });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to fetch all exotic cars from the REST API and return them as JSON
router.get("/api", async (req, res) => {
  try {
    const cars = await dal.getCarsAPI();
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to add a new car to the database
router.get("/add", (req, res) => {
  res.render("addCar");
});

// adding the new car to the database
router.post("/add", async (req, res) => {
  const { make, model, year, vin, country, mileage } = req.body;
  try {
    await dal.addCar({ make, model, year, vin, country, mileage });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
