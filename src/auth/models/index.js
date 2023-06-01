'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const  userModel  = require('./users-models');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:': process.env.DATABASE_URL;

// database singleton, creates the connection
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//tried consolidating user model here yesterday with TAs to try and fix no connection with post function
let Users = userModel(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  Users,// working to export userModel
};