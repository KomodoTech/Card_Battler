const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.get('/', cardController.getAll, (req, res) => {
  res.status(200).json(res.locals.cards);
});

// router.getCard();

module.exports = router;
