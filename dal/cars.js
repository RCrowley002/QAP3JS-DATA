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

async function addCar(carData) {
  const { make, model, year, vin, country, mileage } = carData;
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

module.exports = {
  getCars,
  getCarsAPI,
  addCar,
};
