// index de api 
const express = require('express');
const router = express.Router();

// rutas
const formularioRoutes = require('./formulario.routes');

router.use('/formulario', formularioRoutes);

module.exports = router;