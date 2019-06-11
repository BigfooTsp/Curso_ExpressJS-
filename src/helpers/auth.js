/** Helper que confirma si el usuario está autenticado antes
 * de continuar con el proceso.
 */


const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Not Authorized.');
  res.redirect('/user/signin');
};

module.exports = helpers;
