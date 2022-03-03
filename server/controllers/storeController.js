const Store = require('../models/storeModel');

const storeController = {};

storeController.addStore = async (req, res, next) => {
  try {
    // TODO: make this dynamic
    /**
     * health: { type: Number, required: true },
      attack: { type: Number, required: true },
      level: { type: Number, required: true, default: 0 },
      species_id: { type: Number, required: true },
      equipment_id: { type: Number },
     */
    // TODO: try broken cards to make sure schema is working
    console.log('res.locals.cards: ', res.locals.cards);
    const testStore = {
      cards: [res.locals.cards[0]._id, res.locals.cards[1]._id],
      items: [0, 1, 2],
    }
    res.locals.store = await Store.create(testStore);
    return next();
  } catch (err) {
    const customError = {
      log: `Express error handler caught middleware error inside storeController.getAll in storeController.js:\n ${err}`,
      status: 500,
      message: { err: 'An error occurred when trying to post your store' },
    };
    return next(customError);
  }
};

module.exports = storeController;