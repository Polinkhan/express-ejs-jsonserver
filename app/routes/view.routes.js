// Modules
const express = require("express");
const router = express.Router();

// Controllers
const { Home } = require("../controller/view.controller");

// Routes
router.get("/", Home);

module.exports = router;
