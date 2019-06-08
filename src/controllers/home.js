/** Los controladores son funciones que se pueden
 * solicitar indicándolas como  argumento en las 
 * funciones de enrutamiento.
 */

const ctrl = {};

const { Image } = require('../models');

ctrl.index = async (req, res) => {
  const images = await Image.find().sort({ timestamp: -1 });
  res.render('index', { images });
};

module.exports = ctrl;
