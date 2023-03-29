const express = require("express");
const conctDB = require("./config/database");
const usermodule = require("./models/user");
const app = express();
require("dotenv").config({ path: "./config/.env" });
port = process.env.Port || 4000;
conctDB();
app.use(express.json());

app.use("/", require("./routes/routes"));

app.listen(port, (e) =>
  e ? console.log(e) : console.log(`server is conected on port ${port}`)
);
