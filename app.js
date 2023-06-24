const express = require('express');
const apis = require('./apis'); // Import the users API router

const app = express();
const port = 3000;

app.use(express.json());

// Mount the users API router
app.use('/', apis);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
