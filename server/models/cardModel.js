const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { MONGO_PORT } = process.env;
const MONGO_URI = `mongodb://localhost:${MONGO_PORT}`;

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'cardbattler',
// })
//   .then(() => { console.log('Connected to Mongo database'); })
//   .catch((err) => {
//     console.log('Error in mongoose connect (model.js): ', err);
//   });

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'cardbattler',
    });
    console.log('Connected to Mongo database');
  } catch (err) {
    console.log(`Error in mongoose connect (cardModel.js): ${err}`);
  }
};
connectDB();

const { Schema } = mongoose;

// TODO: confirm that equipment should not be required
const cardSchema = new Schema({
  health: { type: Number, required: true },
  attack: { type: Number, required: true },
  species_id: { type: Number, required: true },
  equipment_id: { type: Number },
});

// TODO: mongoose middleware

const Card = mongoose.model('card', cardSchema);
module.exports = Card;
