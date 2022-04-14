const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
PORT = process.env.port;
const DBconnect = require("./DBconnect");
DBconnect();
app.use(express.json());
app.use(cors());
app.use("/game", require("./routes/gameRouter"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running in port${PORT}`);
});
