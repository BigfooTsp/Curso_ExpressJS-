/** Los helpers de Handlebar
 * son funciones que se pueden ejecutar desde las vistas
 */
const moment = require('moment');
const helpers = {};

/** Usa el módulo 'moment' para devolver el tiempo que ha transcurrido
 * desde que se colgó esa imagen
 */
helpers.timeago = (timestamp) => {
  return moment(timestamp).startOf('minute').fromNow();
};

/** Devuelve el formato timestamp de Mongo en una
 * versión para la vista
 */
helpers.pretiffyDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.toDateString('dd-MM-yyyy');
  const time = date.toTimeString().split(' ')[0];
  return `${day} ${time}`;
};



// Exporta los helpers
module.exports = helpers;
