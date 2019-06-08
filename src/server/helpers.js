/** Los helpers de Handlebar
 * son funciones que se pueden ejecutar desde las vistas
 */
const moment = require('moment');
const helpers = {};

/** Usa el módulo 'moment' para devolver el tiempo que ha transcurrido
 * desde que se colgó esa imagen
 */
helpers.timeago = timestamp => {
  return moment(timestamp).startOf('minute').fromNow();
};

module.exports = helpers;