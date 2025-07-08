//rutas de vista home
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Página de inicio' });
});

module.exports = router;