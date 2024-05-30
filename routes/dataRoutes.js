const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController'); // Example controller, replace with your own controllers

// Define routes
router.get('/', dataController.getData); // Example GET route, replace with your own routes

module.exports = router;