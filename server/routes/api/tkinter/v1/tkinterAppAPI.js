/**
 * File: tkinterAppAPI.js
 * Description:
 *   This JavaScript file provides functions for making API calls specifically designed for building GUI (Graphical User Interface) applications.
 *   It abstracts away the complexity of making HTTP requests and handling responses, allowing GUI developers to focus on building intuitive user interfaces.
 */

const express = require('express');
const router = express.Router();

// Define API routes for tkinter app
router.get('/data', (req, res) => {
  res.json({ message: 'API data for tkinter app' });
});

module.exports = router;

