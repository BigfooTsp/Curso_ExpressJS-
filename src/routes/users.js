/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const express = require('express');
const router = express.Router();

const User = require('../models/User');
const passport = require('passport');


// Formulario Ingresando usuario
router.get('/users/signin', (req, res) => {
  res.render('users/signin');
});

/** Procesa inicio de sesión de usuario
 * Aquí es donde se utiliza realmente el módulo passport
 * gestionando la sesión de usuario.
 * Redirecciona según el resultado de la autentificacion.
 */
router.post('/users/signin', passport.authenticate('local', {
  successRedirect: '/notes',
  failureRedirect: '/users/signin',
  failureFlash: true
}));


// Formulario 'Nuevo usuario'
router.get('/users/signup', (req, res) => {
  res.render('users/signup');
});

// ... Procesa nuevo usuario
router.post('/users/signup', async (req, res) => {
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
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      req.flash('error_msg', 'Este email ya está en uso ...');
      res.redirect('/users/signup');
    }

    const newUser = new User({ name, email, password });          // Crea un usuario
    newUser.password = await newUser.encryptPassword(password);   // Encripta el password
    await newUser.save();                                         // Guarda nuevo usuario en la base de datos
    req.flash('success_msg', 'Estas registrado...');
    res.redirect('/users/signin');
  }
});


module.exports = router;
