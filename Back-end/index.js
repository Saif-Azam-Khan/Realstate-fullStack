const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const fs = require("fs");

let propertyDetails = null; // Variable to hold parsed JSON data
// let userData = null;  !!! DO NOT DELETE Will be used in future !!!
// let adminData = null; !!! DO NOT DELETE Will be used in future !!!

// Read the file and parse the JSON data
fs.readFile("./Data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    propertyDetails = JSON.parse(data).items; // Parse the JSON data and assign it to the variable
    // userData = JSON.parse(data).users;  !!! DO NOT DELETE Will be used in future !!!
    // adminData = JSON.parse(data).admin; !!! DO NOT DELETE Will be used in future !!!
  }
});

// Endpoint for showing items under $100,000
app.get("/show/under100k", (req, res, next) => {
  if (propertyDetails) { // Check if propertyDetails is available
    // Filter items based on price and send the filtered results as a response
    res.send(JSON.stringify(propertyDetails.filter((e) => e.price <= 100000)));
  } else {
    res.status(404).send("error in backend"); // Send an error response if propertyDetails is not available
  }
});

// Endpoint for showing items above $100,000
app.get("/show/above100k", (req, res, next) => {
  if (propertyDetails) { // Check if propertyDetails is available
    // Filter items based on price and send the filtered results as a response
    res.send(JSON.stringify(propertyDetails.filter((e) => e.price > 100000)));
  } else {
    res.status(404).send("error in backend"); // Send an error response if propertyDetails is not available
  }
});

// Default endpoint for showing all items
app.get("/", (req, res, next) => {
  if (propertyDetails) { // Check if propertyDetails is available
    res.send(JSON.stringify(propertyDetails)); // Send the complete propertyDetails as a response
  } else {
    res.status(404).send("error in backend"); // Send an error response if propertyDetails is not available
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
