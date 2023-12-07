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

// Route to update the mileage of a car

router.post("/:car_id/update", async (req, res) => {
  const carID = req.params.car_id;
  const newMileage = req.body.newMileage;
  try {
    await dal.updateMileage(carID, newMileage);
    res.redirect(`/${carID}`);
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
  try {
    const car = req.body;
    await dal.addCar(car);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to Add Car");
  }
});

// Route to fetch a specific car by ID using link parameters
router.get("/:car_id", async (req, res) => {
  const carID = req.params.car_id;
  try {
    const car = await dal.getCarByID(carID);
    res.render("carDetails", { car });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/delete", async (req, res) => {
  const carID = req.body.carID;
  try {
    await dal.deleteCar(carID);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to Delete Car");
  }
});

module.exports = router;
