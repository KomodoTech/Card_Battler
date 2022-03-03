const Board = require('../models/boardModel');

const boardController = {};

boardController.addboard = async (req, res, next) => {
  try {
    const board = req.body;
    res.locals.board = await board.create(board);
    return next();
  } catch (err) {
    const customError = {
      log: `Express error handler caught middleware error inside boardController.addBoard in boardController.js:\n ${err}`,
      status: 500,
      message: { err: 'An error occurred when trying to post your board' },
    };
    return next(customError);
  }
};

module.exports = boardController;