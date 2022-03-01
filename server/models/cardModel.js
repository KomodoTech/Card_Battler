const mongoose = require('mongoose');

const PORT = 27017;
const MONGO_URI = `mongodb://localhost:${PORT}`;

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
