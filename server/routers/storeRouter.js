const express = require('express');
const storeController = require('../controllers/storeController');
const cardController = require('../controllers/cardController');

const router = express.Router();

router.post('/', cardController.getAll, storeController.addStore, (req, res) => {
  res.status(200).json(res.locals.store);
});

module.exports = router;
