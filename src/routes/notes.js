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
    req.flash('success_msg', 'Nota agregada...'); // Mensaje al usuario a través del módulo connect-flash
    res.redirect('/notes'); // Muestra respuesta
  }
});


// Editando notas
router.get('/notes/edit/:id', async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.render('notes/edit-note', { note });
});
// ... que envía un PUT recibido por la siguiente
router.put('/notes/edit-note/:id', async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash('success_msg', 'Nota editada...');
  res.redirect('/notes');
});


// Borrar nota
router.delete('/notes/delete/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Nota eliminada...');
  res.redirect('/notes');
});


// Muestra todas las notas
router.get('/notes', async (req, res) => {
  const notes = await Note.find().sort({ date: 'desc' });
  res.render('notes/all-notes', { notes });
});

module.exports = router;
