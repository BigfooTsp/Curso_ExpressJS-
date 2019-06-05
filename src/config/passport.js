/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-else-return */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Login local

const User = require('../models/User');

/** Recibiendo y procesando la constraseña
 * En caso correcto devuelve json user
 */
passport.use(new LocalStrategy({
  usernameField: 'email',																						// Dato a procesar
}, async (email, password, done) => {
  const user = await User.findOne({ email });												// Busca el correo en los usuarios de la base de datos
  if (!user) {																											// Si no existe ...
    return done(null, false, { message: 'No existe el usuario' });			// null es que no se envía error
  }
  const match = await user.matchPassword(password);									// Si existe, busca el password
  if (match) {																												// Si coincide ...
    return done(null, user);
  } else {																													// Si no coincide ...
    return done(null, false, { message: 'Password incorrecto' });
  }
}));

/** Manteniendo sesión activa
 * Tras comprobar que el usuario existe, identificado a través de su ID
 * Esto es necesario para no tener que estar logeando continuamente
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});


/** Comprueba si el usuario está en sesión activa (Desde un .id)
 */
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
