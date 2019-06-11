/** Helper que recopila los datos de los otrs helpers 
 * y los envía en un arreglo
 */
const Stats = require('./stats');
const Images = require('./images');
const Comments = require('./comments');

module.exports = async (viewModel) => {

  /** uso de Promise.all() para enviar un objeto con todos los 
   * resultados una vez hayan finalizado todas las funciones asíncronas */
  const results = await Promise.all([
    Stats(),
    Images.popular(),
    Comments.newest(),
  ]);
  //  Añade al objeto recibido el objeto .sidebar con la data
  viewModel.sidebar = {
    stats: results[0],
    popular: results[1],
    comments: results[2],
  };

  return viewModel;

};
 
