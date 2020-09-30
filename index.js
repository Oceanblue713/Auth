const express = require('express');
const app = express();
const pool = require('./db');



const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('Server Up and running');
});