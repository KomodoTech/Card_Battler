const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { MONGO_PORT } = process.env;
const MONGO_URI = `mongodb://localhost:${MONGO_PORT}`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'cardbattler',
})
  .then(() => { console.log('Connected to Mongo database'); })
  .catch((err) => {
    console.log('Error in mongoose connect (model.js): ', err);
  });

const { Schema } = mongoose;

const cardSchema = new Schema({
  health: Number,
  attack: Number,
  species_id: Number,
  equipment_id: Number,
});

// TODO: mongoose middleware

const Card = mongoose.model('card', cardSchema);

module.exports = Card;
