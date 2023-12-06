const pool = require("./db");

async function getCars() {
  try {
    const result = await pool.query("SELECT * FROM exotic_cars");
    return result.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get cars");
  }
}

async function getCarsAPI() {
  try {
    const result = await pool.query("SELECT * FROM exotic_cars");
    return result.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get cars");
  }
}

async function addCar(car) {
  const { make, model, year, vin, country, mileage } = car;
  try {
    await pool.query(
      "INSERT INTO exotic_cars (make, model, year, vin, country, mileage) VALUES ($1, $2, $3, $4, $5, $6)",
      [make, model, year, vin, country, mileage]
    );
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add car");
  }
}

async function getCarByID(carID) {
  try {
    const result = await pool.query(
      "SELECT * FROM exotic_cars WHERE car_id = $1",
      [carID]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get car");
  }
}

async function updateMileage(carID, newMileage) {
  try {
    await pool.query("UPDATE exotic_cars SET mileage = $1 WHERE car_id = $2", [
      newMileage,
      carID,
    ]);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update car");
  }
}

async function deleteCar(carID) {
  try {
    await pool.query("DELETE FROM exotic_cars WHERE car_id = $1", [carID]);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete car");
  }
}

module.exports = {
  getCars,
  getCarsAPI,
  addCar,
  getCarByID,
  updateMileage,
  deleteCar,
};
