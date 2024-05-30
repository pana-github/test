const express = require('express');
const router = express.Router();
const databaseController = require('./databaseController');

// Define route handler for fetching data
router.get('/api/data', async (req, res) => {
    try {
        const data = await databaseController.getDataFromDatabase();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

module.exports = router;
