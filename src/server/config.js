/* eslint-disable indent */

/** Archivo de configuración del servidor:
 * Recibe una instancia de express y la devuelve configurada.
 */
const express = require('express');
const exphbs = require('express-handlebars'); // Wiewer .hbs
const path = require('path');                 // Utilizades para path
const morgan = require('morgan');             // logger de Express
const multer = require('multer');             // Gestión de subida de archivos
const session = require('express-session');   // Gestiona sesión de usuario
const flash = require('connect-flash');       // Mensajes para usuario en la vista
const passport = require('passport');         // Sesión de usuario (añade req.user y req.sessios.user)
const notifier = require('node-notifier');      // Para popups con notificaciones
const errorhandler = require('errorhandler'); // Gestión de errores

const routes = require('../routes');

module.exports = (app) => {

  // Settings
  app.set('port', process.env.PORT || 3000);  // ... port

  // ... View engine
  app.set('views', path.join(__dirname, '../views/'));
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./helpers'), // Helpers para handlebars
  }));
  app.set('view engine', '.hbs');


  // Middlewares
  app.use(express.urlencoded({ extended: false })); // Procesa datos del body
  app.use(session({
    secret: 'INVERNALIA',
    resave: true,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  require('./passport');      // Configuración del passport para express


  app.use(express.json());    // Maneja datos JSON
  app.use(morgan('dev'));
  
  app.use(multer({             // Guarda _items_ de upload en ./public/temp...
    dest: path.join(__dirname, '../public/upload/temp'),
  }).single('file'));        // 'image' se refiere al name="image" del input de ./views/index.hbs
                              // Añade variable req.file
  
  app.use(flash());           // Para enviar mensajes al usuario
  
  
  // Global Variables
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });


  // Routes
  routes(app);  // Añade las direcciones del archivo de rutas


  // Static files
  app.use('/public/', express.static(path.join(__dirname, '../public')));


  // errorhandlers
  if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler({ log: errorNotification }));
  }
   
  function errorNotification(err, str, req) {
    const title = `Error in ${req.method} ${req.url}`;
   
    notifier.notify({
      title,
      message: str,
    });
  }

  return app;
};
