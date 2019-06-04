/* eslint-disable camelcase */
const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
  res.render('users/signin');
});

// Formulario 'Nuevo usuario'
router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

// ... Procesa nuevo usuario
router.post('/users/signup', (req, res) => {
  const {
    name, email, password, confirm_password,
  } = req.body;
  const errors = [];
  if (password != confirm_password) {
    errors.push({ text: 'Passwords no coinciden' });
  }
  if (password.length < 6) {
    errors.push({ text: 'El password debe de tener al menos 6 caracteres' });
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors, name, email, password, confirm_password,
    });
  } else {
    res.send('ok');
  }
});


module.exports = router;
