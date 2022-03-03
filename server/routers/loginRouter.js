const express = require('express');

// TODO: remove card
const Card = require('../models/cardModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Game here');
});

module.exports = router;
