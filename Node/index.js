const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
let a = null;

const fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("./Data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("ok");
    res.send(JSON.stringify(data));
  });
  
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
