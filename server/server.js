const express = require('express');
const path = require('path');
const Card = require('./models/cardModel');

const PORT = 3000;

const app = express();

// JSON parse the body
app.use(express.json());
// Grab params sent through url
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Game here');
});

app.post('/', async (req, res) => {
  const isIdq = await Card.create({
    health: 2,
    attack: 2,
    species_id: 1,
    equipment_id: 3,
  });
  console.log(isIdq);
  const body = await Card.find({ health: 2 });
  return res.status(200).send(body);
});

app.use('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const customError = Object.assign({}, defaultError, err);
  console.log(customError.log);
  return res.status(customError.status).send(JSON.stringify(customError.message));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
