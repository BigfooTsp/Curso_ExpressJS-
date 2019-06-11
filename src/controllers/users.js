/** Controlador para el modelo User
 * Gestiona CRUD en BD y prepara las vistas
 * 
  router.get('/user/register', userOp.register);            // Formulario de registro
  router.post('/user/register', userOp.createNewUser);      // Creación de nuevo usuario
  router.get('/user/signin', userOp.signin);                // formulario de ingreso
  router.post('/user/login', userOp.login);                 // login
  router.get('/user/logout', userOp.logout);                // logout
 * 
 */
const passport = require('passport');

const { User } = require('../models');

const ctrl = {};

// Formulario de registro
ctrl.register = async (req, res) => {
  res.render('user/register');
};


// Registra un nuevo usuario
ctrl.createNewUser = async (req, res) => {
  const errors = [];
  const {
    name, email, password, confirm_password, 
  } = req.body;
  
  if (password != confirm_password) {
    errors.push({ text: 'Passwords do not match.' });
  }

  if (password.length < 4) {
    errors.push({ text: 'Passwords must be at least 4 characters.' });
  }
  
  if (errors.length > 0) {
    res.render('user/register', { 
      errors, name, email, password, confirm_password,
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      req.flash('error_msg', 'The Email is already in use.');
      res.redirect('/user/register');
    } else {
      // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password); // Encriptando la contraseña con el helper del modelo User
      await newUser.save();
      req.flash('success_msg', 'You are registered.');
      res.redirect('/user/signin');
    }
  }
};


// Formulario de ingreso
ctrl.signin = (req, res) => {
  res.render('user/signin');
};


// Login de usuario
ctrl.login = passport.authenticate('local', {
  successRedirect: '/_item_/new_item_',               // Redirección si login correcto
  failureRedirect: '/user/signin',   // Redirección si login INcorrecto
  failureFlash: true,
});


// Logout de usuario
ctrl.logout = async (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out now.');
  res.redirect('/user/signin');
};



module.exports = ctrl;
