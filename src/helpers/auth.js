/**
 * Elimina el enlace de 'notas' de la barra de navegación si el
 * usuario no ha iniciado sesión
 * En la práctica esto es un middleware
 */

const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {               // Si el usuario está logeado
    return next();
  }
  req.flash('error_msg', 'No autorizado');
  res.redirect('/users/signin');
};

module.exports = helpers;
