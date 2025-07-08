const express = require('express');
const router = express.Router();
const formulario = require('../../model/formulario');

// Obtener todos los formularios
router.get('/', async (req, res) => {
  try {
    const formularios = await formulario.find();
    res.json(formularios);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en la obtención de los formularios');
  }
});

// Obtener un formulario por ID
router.get('/:id', async (req, res) => {
  try {
    const formulario = await formulario.findById(req.params.id);

    if (!formulario) return res.status(404).json({ msg: 'Formulario no encontrado' });

    res.json(formulario);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Formulario no encontrado' });
    }
    console.error(err.message);
    res.status(500).send('Error en la obtención del formulario');
  }
});

// Crear un nuevo formulario
router.post('/', async (req, res) => {
  const { nombre, descripcion } = req.body;

  // Validar los campos
  if (!nombre ||!descripcion) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
  }

  try {
    const nuevoFormulario = new formulario({ nombre, descripcion });
    await nuevoFormulario.save();

    res.json(nuevoFormulario);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en la creación del formulario');
  }
});

// Actualizar un formulario
router.put('/:id', async (req, res) => {
    try {
        const formulario = await formulario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!formulario) return res.status(404).json({ msg: 'Formulario no encontrado' });
        res.json(formulario);
        } catch (err) {
            if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Formulario no encontrado' });
        }
        console.error(err.message);
        res.status(500).send('Error en la actualización del formulario');
            
    }

});

// Eliminar un formulario
router.delete('/:id', async (req, res) => {
  try {
    const formulario = await formulario.findByIdAndDelete(req.params.id);

    if (!formulario) return res.status(404).json({ msg: 'Formulario no encontrado' });

    res.json({ msg: 'Formulario eliminado' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Formulario no encontrado' });
    }
    console.error(err.message);
    res.status(500).send('Error en la eliminación del formulario');
  }
});

module.exports = router;