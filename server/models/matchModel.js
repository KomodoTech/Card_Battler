const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { boardSchema } = require('./boardModel');

dotenv.config();

const { MONGO_PORT } = process.env;
const MONGO_URI = `mongodb://localhost:${MONGO_PORT}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'cardbattler',
    });
    console.log('Connected to Mongo database');
  } catch (err) {
    console.log(`Error in mongoose connect (matchModel.js): ${err}`);
  }
};
connectDB();

const { Schema } = mongoose;

const matchSchema = new Schema({
  roundNumber: { type: Number, required: true },
  pool: [boardSchema],
});

const Match = mongoose.model('match', matchSchema);
module.exports = Match;
