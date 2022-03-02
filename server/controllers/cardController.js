const Card = require('../models/cardModel');

const cardController = {};

// cardController.getAll = (req, res, next) => {
//   Card.find((err, data) => {
//     if (err) {
//       const customError = {
//         log: `Express error handler caught middleware error inside cardController.getAll in cardController.js:\n ${err}`,
//         status: 500,
//         message: { err: 'An error occurred when trying to get your cards' },
//       };
//       return next(customError);
//     }
//     res.locals.cards = data;
//     return next();
//   });
// };

cardController.getAll = async (req, res, next) => {
  try {
    res.locals.cards = await Card.find();
    return next();
  } catch (err) {
    const customError = {
      log: `Express error handler caught middleware error inside cardController.getAll in cardController.js:\n ${err}`,
      status: 500,
      message: { err: 'An error occurred when trying to get your cards' },
    };
    return next(customError);
  }
};

module.exports = cardController;
