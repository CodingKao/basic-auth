'use strict';

//import resources
const express = require('express');
const cors = require('cors');
const authRouter = require('./auth/router');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

//singleton express for app
const app = express();

//json processor
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(authRouter);
//error handlers
app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log('server is running on:', port));

module.exports = {
  app, 
  start,
};