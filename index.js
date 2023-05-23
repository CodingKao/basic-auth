
require('dotenv').config();

'use strict';


// Loads and configures environment variables from a .env file.
require('dotenv').config();

// Imports the sequelizeDatabase object from the ./src/auth/models/index file.
const { sequelizeDatabase } = require('./src/auth/models/index');

// Imports the start function from the ./src/server file.
const { start } = require('./src/server');


// Process PORT 3001
const PORT = process.env.PORT || 3001;


// Syncs models, starts server, handles errors during synchronization process.
sequelizeDatabase.sync()
  .then(() => {
    console.log('Connection is working!');
    start(PORT);
  }).catch(e => {
    console.error('Could not start server'. e.message);
  });

