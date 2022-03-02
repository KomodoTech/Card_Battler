const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { cardSchema } = require('./cardModel');
const { storeSchema } = require('./storeModel');

dotenv.config();

const { MONGO_PORT } = process.env;
const MONGO_URI = `mongodb://localhost:${MONGO_PORT}`;

// TODO: look into these options
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'cardbattler',
    });
    console.log('Connected to Mongo database');
  } catch (err) {
    console.log(`Error in mongoose connect (boardModel.js): ${err}`);
  }
};
connectDB();

const { Schema } = mongoose;

const boardSchema = new Schema({
  roundNumber: { type: Number, required: true },
  health: { type: Number, required: true },
  gold: { type: Number, required: true },
  wins: { type: Number, required: true },
  store: { type: storeSchema, required: true },
  cards: [cardSchema],
});

const Store = mongoose.model('store', boardSchema);
module.exports = Store;
