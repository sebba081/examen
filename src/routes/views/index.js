const express = require('express');
const router = express.Router();

// Obtener todos los formularios

const home = require('./home.routes');

// Rutas
router.use('/', home);

module.exports = router;