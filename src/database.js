/* eslint-disable no-unused-vars */
/** Conecta con la base de datos.
 * Importa la dirección desde ./keys
 * Muestra mensaje en pantalla con el resultado */

const mongoose = require('mongoose');

const { database } = require('./keys');

mongoose.connect(database.URI, {
  useNewUrlParser: true,    
})
  .then(db => console.log('db is connected'))
  .catch(err => console.log(err));
