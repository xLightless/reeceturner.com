const express = require('express');
const vhost = require('vhost');
const path = require('path');
const mainAppRoutes = require('./routes/mainAppRoutes');
const tkinterAppRoutes = require('./routes/tkinterAppRoutes');
const tkinterAppAPI = require('./routes/api/tkinter/v1/tkinterAppAPI');

const app = express();

// APP ROUTES
app.use(vhost('localhost', mainAppRoutes));
app.use(vhost('tkinter.localhost', tkinterAppRoutes));

// API CALL ROUTES
app.use(vhost('api.tkinter.localhost', tkinterAppAPI));

// Route requests for main domain and other subdomains to main app's index.html
// app.use(vhost('localhost', (req, res) => {
//   res.sendFile(path.join(mainAppPath, 'index.html'));
// }));
// app.use(vhost('tkinter.localhost', (req, res) => {
//   res.sendFile(path.join(tkinterAppPath, 'index.html'));
// }));

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});