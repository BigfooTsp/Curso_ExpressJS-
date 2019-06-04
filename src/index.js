const express = require('express');
const exphbs = require('express-handlebars');       // Gestor de vistas
const path = require('path');
const methodOverride = require('method-override');  // Envía métodos HTML ocultamente
const session = require('express-session');
const flash = require('connect-flash');             // Middleware de mensajes al usuario

// Initializations
const app = express();
require('./database'); // Conecta con la base de datos

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Middlewares
// ... Generalmente de importan y luego se instancias aquí
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'mysecretapp',
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());

// Global Variables

// ... Para procesar mensajes al usuario en el código (connect-flash)
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');

  next();
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));


// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Server is listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
