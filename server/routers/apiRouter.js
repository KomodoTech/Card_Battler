const express = require('express');
const cardRouter = require('./cardRouter');
const storeRouter = require('./storeRouter');
const boardRouter = require('./boardRouter');

const router = express.Router();


// TODO: think about the routes more (potentially build out more dirs)
router.use('/cards', cardRouter);
router.use('/stores', storeRouter);
router.use('/boards', boardRouter);

module.exports = router;
