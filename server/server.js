const express = require('express');
const vhost = require('vhost');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve('./.env')});


const mainAppRoutes = require('./routes/mainAppRoutes');
const tkinterAppRoutes = require('./routes/tkinterAppRoutes');
const tkinterAppAPI = require('./routes/api/tkinter/v1/tkinterAppAPI');
// const linkedInAPI = require("./routes/api/linkedin/linkedIn")

const app = express();

// APP ROUTES
app.use(vhost(`${process.env.HOST}`, mainAppRoutes));
// app.use(vhost('localhost', linkedInAPI));
app.use(vhost(`tkinter.${process.env.HOST}`, tkinterAppRoutes));

// API CALL ROUTES
app.use(vhost(`api.tkinter.${process.env.HOST}`, tkinterAppAPI));

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});