const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.get('/', cardController.getAll, (req, res) => {
  res.status(200).json(res.locals.cards);
});

const testCard = {
 hp: 2,
  attack: 3,
  level: 1,
  type_id: 2,
  equipment_id: 4,
}

// TODO: fix this route
router.post('/', async (req, res) => {
  const isIdq = await Card.create(testCard);
  console.log(isIdq);
  const body = await Card.find({hp: 2 });
  return res.status(200).send(body);
});

// router.getCard();

module.exports = router;
