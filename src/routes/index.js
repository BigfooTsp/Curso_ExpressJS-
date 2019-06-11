/** Archivo de direccionamiento de rutas 
 * Relaciona las direcciones con las funciones de los controladores
 * Configura el objeto express.Router() con las peticiones (direcciones)
*/

const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../helpers/auth');


// Controllers
const home = require('../controllers/home');
const _item_Op = require('../controllers/_items_');
const userOp = require('../controllers/users');


module.exports = (app) => {
  
  // home
  router.get('/', home.index);                              // Página de inicio
  router.get('/about', home.about);                              // Página de inicio
  // _item_
  
  router.get('/_item_/all', isAuthenticated, _item_Op.all_items_);                 // view de item
  router.get('/_item_/new_item_', isAuthenticated, _item_Op.new_item_);                 // view de item
  router.post('/_item_/create', isAuthenticated, _item_Op.create);             // Crear item en la bd
  router.post('/_item_/update/:_id', isAuthenticated, _item_Op.update);        // Editar item de la bd
  router.post('/_item_/delete/:_id', isAuthenticated, _item_Op.delete);        // Borrar item de la base de datos
  router.get('/_item_/:_id', isAuthenticated, _item_Op.one_items_);                 // view de item
  // user
  router.get('/user/register', userOp.register);            // Formulario de registro
  router.post('/user/register', userOp.createNewUser);      // Creación de nuevo usuario
  router.get('/user/signin', userOp.signin);                // formulario de ingreso
  router.post('/user/login', userOp.login);                 // login
  router.get('/user/logout', userOp.logout);                // logout

  app.use(router);
};
