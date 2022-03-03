const express = require('express');
const boardController = require('../controllers/boardController');

const router = express.Router();

// router.get('/', boardController.getAll, (req, res) => {
//   res.status(200).json(res.locals.boards);
// });

// TODO: add Middleware to check data
router.post('/', async (req, res) => {
  const board = req.body;
  const id = await Board.create(board);
  const body = await Board.find({_id: id });
  return res.status(200).send(body);
});

module.exports = router;
