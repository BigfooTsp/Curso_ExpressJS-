/** Archivo de inicio de servidor
 * Inicializa servidor Express y conecta con base de datos.
 */

const express = require('express');
const config = require('./server/config');  // Importa configuración del server

// Initializations
const app = config(express());							// Genera instancia configurada de Express
require('./database');											// Conecta con la base de datos

// Server is listening
app.listen(app.get('port'), () => {					// Inicia servidor
  console.log('Server on port', app.get('port'));
});
