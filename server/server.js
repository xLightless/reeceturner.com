const express = require('express');
const vhost = require('vhost');


const mainAppRoutes = require('./routes/mainAppRoutes');
const tkinterAppRoutes = require('./routes/tkinterAppRoutes');
const tkinterAppAPI = require('./routes/api/tkinter/v1/tkinterAppAPI');
// const linkedInAPI = require("./routes/api/linkedin/linkedIn")

const app = express();

// APP ROUTES
app.use(vhost('localhost', mainAppRoutes));
// app.use(vhost('localhost', linkedInAPI));
app.use(vhost('tkinter.localhost', tkinterAppRoutes));

// API CALL ROUTES
app.use(vhost('api.tkinter.localhost', tkinterAppAPI));

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});