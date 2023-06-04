'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const basicAuth = require('./middleware/index');
const { Users } = require('./models/index');

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
});

router.post('/signin', basicAuth, (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(401).send('Unauthorized user!');
  }

});


module.exports = router;