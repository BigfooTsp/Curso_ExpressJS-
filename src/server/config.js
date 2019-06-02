
/** Archivo de configuración del servidor:
 * Recibe una instancia de express y la devuelve configurada.
 */
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const errorhandler = require('errorhandler');

const routes = require('../routes/index');

module.exports = (app) => {

  // Settings
  app.set('port', process.env.PORT || 3000);  // ... port

  // ... View engine
  app.set('views', path.join(__dirname, 'views'));
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./helpers'), // Helpers para handlebars
  }));
  app.set('view engine', '.hbs');


  // Middlewares
  app.use(morgan('dev'));      // logger para express
  
  app.use(multer({             // Guarda imágenes de upload en ./public...
    dest: path.join(__dirname, '../public/upload/temp'),
  }).single('image'));        // Crea variable src.image con solo la imagen accesible.
  
  app.use(express.urlencoded({ extended: false })); // Procesa datos desde formularios
  app.use(express.json());    // Maneja datos JSON


  // Routes
  routes(app);  // Añade las direcciones del archivo de rutas


  // Static files
  app.use('/public/', express.static(path.join(__dirname, '../public')));


  // errorhandlers
  if (app.get('env') === 'development') {       // Si la aplicación está en desarrollo
    app.use(errorhandler);                      // usar errorHandler (gestión de errores)
  }


  return app;
};
