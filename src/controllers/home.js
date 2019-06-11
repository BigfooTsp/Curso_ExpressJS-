/** Los controladores son funciones que se pueden
 * solicitar indicándolas como  argumento en las 
 * funciones de enrutamiento.
 */

const ctrl = {};

const { Image } = require('../models');

const sidebar = require('../helpers/sidebar');

/** Configura página de inicio */
ctrl.index = async (req, res) => {
  const images = await Image.find().sort({ timestamp: -1 });
  /** Obtención de los stats para la sidebar */
  let viewModel = { images: [] };             // crea contenedor para los datos
  viewModel.images = images;                  // Los completa con los ids de las imágenes
  viewModel = await sidebar(viewModel);       // Usa el helper para completar el objeto con los datos
  // Solicita vista con los datos obtenidos
  res.render('index', viewModel);
};

module.exports = ctrl;
