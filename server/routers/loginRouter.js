const express = require('express');
const Card = require('../models/cardModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Game here');
});

router.post('/', async (req, res) => {
  const isIdq = await Card.create({
    health: 3,
    attack: 2,
    species_id: 1,
    equipment_id: 3,
  });
  console.log(isIdq);
  const body = await Card.find({ health: 2 });
  return res.status(200).send(body);
});

module.exports = router;
