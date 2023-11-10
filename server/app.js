require('@babel/register');
require('dotenv').config();

const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const indexRouter = require('./routes/index.routes');

serverConfig(app);

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`It's alive at ${PORT} port!`);
});
