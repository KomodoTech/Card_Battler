const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const Card = require('./models/cardModel');
const loginRouter = require('./routers/loginRouter');
const apiRouter = require('./routers/apiRouter');

dotenv.config();

const { SERVER_PORT } = process.env;

const app = express();

// JSON parse the body
app.use(express.json());
// Grab params sent through url
app.use(express.urlencoded({ extended: true }));

// TODO:
/**
 * Route for root should be handled by loginRouter (eventually login screen)
 *  - GET show login.html
 *  - POST auth data (eventaully OAuth)
 *  - OPTIONS look into CORS preflight
 *
 * Route for game should be handled by gameRouter
 *  - GET show game.html initially just a menu with just a button to
 *    continue onto the game (rest will be react router)
 *
 * Route for /api should be handled by apiRouter
 *  - /buy
 *  - /roll
 *  - /startTurn
 *
 */

app.use('/', loginRouter);
app.use('/api', apiRouter);

// NOTE: remove '*' should default
// TODO: build fancy 404 page
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const customError = { ...defaultError, ...err };
  console.log(customError.log);
  return res.status(customError.status).send(JSON.stringify(customError.message));
});

app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`);
});
