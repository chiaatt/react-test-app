const express =  require("express");
const path = require('path');
const routes = require('./routes/index.route');

const PORT = process.env.PORT || 3001;

const app = express();

// React App
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Setup routes
app.use(routes);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});