/** Controlador que comunica el servidor con la base de datos.
 * Se trata de configurar las operaciones necesarias con la base de datos y 
 * prepara las variables para ser utilizadas por el gestor de vistas de 
 * express
 */

/** Importaciones comunes
const path = require('path');                             // Funciones para nombres de directorios
const fs = require('fs-extra');                           // Funciones extra file system
const md5 = require('md5');                               // Manejo de hash
*/

const sidebar = require('../helpers/sidebar');   // Helper constar los _items_ de la BD

const ctrl = {};

/** TEST */
/** Configura página de inicio */
ctrl.index = async (req, res) => {
  let viewModel = { user: req.user };  
  viewModel = await sidebar(viewModel); // Añade { viewModel.sidebar: { stats: ..., ... }}
  res.render('index', viewModel);
};  


/** About */
ctrl.about = async (req, res) => {
  let viewModel = { user: req.user };  
  viewModel = await sidebar(viewModel); // Añade { viewModel.sidebar: { stats: ..., ... }}
  res.render('about', viewModel);
};


module.exports = ctrl;
