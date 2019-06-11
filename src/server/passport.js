/** Configuración de passport
 * Configura los parámetros necesarios para la getión del usuario
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;       // Estrategia de login, local

const { User } = require('../models');

// Configura la estrategia de identificación del usuario
passport.use(new LocalStrategy({
  usernameField: 'email',                                       // Atributo que identifica al usuario
}, async (email, password, done) => {
  // Match Email's User
  const user = await User.findOne({ email });
  if (!user) {
    return done(null, false, { message: 'Not User found.' });   // Usuario no existe
  } 
  // Match Password's User
  const match = await user.matchPassword(password);
  if (match) {
    return done(null, user);                                    // Usuario existe y pw correcto
  } 
  return done(null, false, { message: 'Incorrect Password.' }); // Usuario existe, pw incorrecto
}));

// Obtiene el id de un user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Obtiene el user de un id
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });

});
