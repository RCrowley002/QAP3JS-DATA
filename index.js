const express = require("express");
const methodOverride = require("method-override");
const pool = require("./dal/db");
//routes
const carRoutes = require("./routes/carRoutes");

// init web app with express
const app = express();
const PORT = 3000;

//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

// Use the carRoutes for paths starting with '/'
app.use("/", carRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Car app running on port ${PORT}`);
});
