// index de api 
const express = require('express');
const router = express.Router();

// rutas
const fomularioController = require('./formulario.controller');

router.use('/formulario', fomularioController);

module.exports = router;