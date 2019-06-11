/* eslint-disable no-return-await */
const { Comment, Image } = require('../models');

// Cuenta las imágenes
async function imageCounter() {
  return await Image.countDocuments();
}

// Cuenta los comentarios
async function commentsCounter() {
  return await Comment.countDocuments();
}

// Cuenta las visitas de las imágenes
async function imageTotalViewsCounter() {
  const result = await Image.aggregate([{ // recorre la propiedad views de todas las imágenes
    $group: {
      _id: '1',
      viewsTotal: { $sum: '$views' },
    }, 
  }]);
  let viewsTotal = 0;
  if (result.length > 0) {
    viewsTotal += result[0].viewsTotal;
  }
  return viewsTotal;
}

// Cuenta los likes
async function likesTotalCounter() {

  const result = await Image.aggregate([{ 
    $group: {
      _id: '1',
      likesTotal: { $sum: '$likes' },
    }, 
  }]);

  let likesTotal = 0;
  if (result.length > 0) {
    likesTotal += result[0].likesTotal;
  }
  return likesTotal;
}

module.exports = async () => {

  const results = await Promise.all([ // Ejecuta todas las funciones y espera reultados
    imageCounter(),
    commentsCounter(),
    imageTotalViewsCounter(),
    likesTotalCounter(),
  ]);

  return {                // Devuelve objeto con los datos
    images: results[0],
    comments: results[1],
    views: results[2],
    likes: results[3],
  }; 
};
