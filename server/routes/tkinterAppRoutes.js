const express = require('express');
const path = require('path');

const router = express.Router();

// Serve static files for main app
router.use(express.static(path.join(__dirname, '../../client/tkinter-app/build')));

// Define API routes for main app
router.get('/', (req, res) => {
});

module.exports = router;
