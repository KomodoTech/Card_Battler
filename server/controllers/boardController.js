const Board = require('../models/boardModel');

const boardController = {};

boardController.getAll = async (req, res, next) => {
  try {
    res.locals.allBoards = await Board.find();
    return next();
  } catch (err) {
    const customError = {
      log: `Express error handler caught middleware error inside boardController.getAll in boardController.js:\n ${err}`,
      status: 500,
      message: { err: 'An error occurred when trying to get your boards' },
    };
    return next(customError);
  }
};

boardController.addBoard = async (req, res, next) => {
  try {
    const board = req.body;
    res.locals.addedBoardId = await Board.create(board);
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

boardController.getBoard = async (req, res, next) => {
  try {
    const boardId = req.body;
    res.locals.board = await Board.find({_id: boardId });
    return next();
  } catch (err) {
    const customError = {
      log: `Express error handler caught middleware error inside boardController.getBoard in boardController.js:\n ${err}`,
      status: 500,
      message: { err: 'An error occurred when trying to post your board' },
    };
    return next(customError);
  }
};

module.exports = boardController;