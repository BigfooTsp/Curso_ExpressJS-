/** Los controladores son funciones que se pueden
 * solicitar indicándolas como  argumento en las 
 * funciones de enrutamiento.
 * En este archivo se recopila todo lo que se puede 
 * hacer con las imágenes
 */
const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');

const ctrl = {};

ctrl.index = (req, res) => {
  
};

ctrl.create = async (req, res) => {
  // configurando nombre y dirección de archivo
  const imgURL = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname)
    .toLowerCase(); // Obtiene la extensión de la imagen
  const targetPath = path.resolve(`src/public/upload/${imgURL}${ext}`);

  // Validación de la imagen y guardado renombrado en destino /public/upload
  if (ext === '.png' || ext === '.gif' || ext === '.jpg' || ext === '.jpeg') {
    await fs.rename(imageTempPath, targetPath);
  }
  res.send('Works!');
};


ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;
