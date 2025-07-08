const express = require('express');
const router = express.Router();

const api = require('./api');
//const controller = require('./controller');
const views = require('./views');

router.use('/api', api);
//router.use('/controller', controller);
router.use('/', views);

module.exports = router;