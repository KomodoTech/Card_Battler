const express = require('express');
const cardRouter = require('./cardRouter');
const storeRouter = require('./storeRouter');

const router = express.Router();


// TODO: think about the routes more (potentially build out more dirs)
router.use('/cards', cardRouter);
router.use('/store', storeRouter);

module.exports = router;
