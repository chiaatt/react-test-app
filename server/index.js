const express =  require("express");
const path = require('path');
const bodyParser =  require("body-parser");

const routes = require('./routes/index.route');

const PORT = process.env.PORT || 3001;

const app = express();

// parse application/json
app.use(bodyParser.json())

// =================================
// Routes
// =================================

// React App route setup
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// API routes
app.use(routes);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// =================================
// Listen
// =================================
app.listen(PORT, () => {
  //console.log(`Server listening on ${PORT}`);
});