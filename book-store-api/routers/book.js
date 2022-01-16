// Step 1: Import Express
const express = require("express");
const controller = require("../controllers/book");

// Step 2: Create Router
const router = express.Router();

// Step 3: Configure Paths
router.get('/', controller.getAll);

module.exports = router;