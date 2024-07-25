// dependendies
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const jsonServer = require("json-server");
require("dotenv").config();

// app
const app = express();
app.use(morgan("dev"));
app.use(express.json());

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/app/views"));

// make a static route
app.use(express.static("public"));

// integrate JSON SERVER
app.use("/db", jsonServer.router("app/db.json"));

// routes
app.use("/", require("./app/routes/view.routes"));
app.use("/api/v1/", require("./app/routes/api.routes"));

// listen app
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
