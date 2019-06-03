const express = require('express');
const router = express.Router();

// Mongoose.Model de Nota para la base de datos
// Crea una clase que se puede instanciar y utilizar.
const Note = require('../models/Note');


// Añade nueva nota
router.get('/notes/add', (req, res) => {
  res.render('notes/new-note');
});

// Recibiendo datos de formulario 'New-Note'
router.post('/notes/new-note', async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: 'Escribe un título.' });
  }
  if (!description) {
    errors.push({ text: 'Escribe una descripción.' });
  }
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Note({ title, description });
    await newNote.save();   // Guarda en MongoDB
    res.redirect('/notes'); // Muestra respuesta
  }
});

// Muestra todas las notas
router.get('/notes', async (req, res) => {
  const notes = await Note.find().sort({ date: 'desc' });
  res.render('notes/all-notes', { notes });
});

module.exports = router;
