/** Archivo de inicio de servidor
 * Inicializa servidor Express y conecta con base de datos.
 */

const express = require('express');
const config = require('./server/config');  // Importa configuración del server


// Initializations
const app = config(express());							// Genera instancia configurada de Express
require('./database');                

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
