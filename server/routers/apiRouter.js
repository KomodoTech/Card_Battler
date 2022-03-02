const express = require('express');
const cardRouter = require('./cardRouter');

const router = express.Router();

// TODO: think about the routes more (potentially build out more dirs)
router.use('/cards', cardRouter);

module.exports = router;
