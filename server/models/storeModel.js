const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { cardSchema } = require('./cardModel');

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
    console.log(`Error in mongoose connect (storeModel.js): ${err}`);
  }
};
connectDB();

const { Schema } = mongoose;

// TODO: confirm that items should just have a numerical id that is used in the game logic
const storeSchema = new Schema({
  cards: [cardSchema],
  items: [Number],
});

const Store = mongoose.model('store', storeSchema);
module.exports = Store;
