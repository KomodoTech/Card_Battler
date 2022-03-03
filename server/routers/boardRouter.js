const express = require('express');
const boardController = require('../controllers/boardController');

const router = express.Router();

router.get('/', boardController.getAll, (req, res) => {
  res.status(200).json(res.locals.allBoards);
});

// TODO: add Middleware to check data
router.post('/', boardController.addBoard, boardController.getBoard, (req, res) => {
  const body = res.locals.board;
  return res.status(200).send(body);
});

module.exports = router;
