/** Los controladores son funciones que se pueden
 * solicitar indicándolas como  argumento en las 
 * funciones de enrutamiento.
 */

const ctrl = {};

ctrl.index = (req, res) => {
  res.render('index');
};

module.exports = ctrl;
