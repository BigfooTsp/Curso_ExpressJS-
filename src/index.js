/** Archivo de inicio de servidor
 * Inicializa servidor Express y conecta con base de datos.
 */

const express = require('express');
const config = require('./server/config');  // Importa configuración del server


// Initializations
const app = config(express());							// Genera instancia configurada de Express
require('./database');                

// Starting the server
const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

// websockets
const io = require("socket.io")(server);      // Servidor de sockets. Envía archivo socket.io.js al navegador

// Creando socket que responde al evento 'connection'
io.on('connection', (socket) => {
  console.log('cliente conectado id:', socket.id);
});
