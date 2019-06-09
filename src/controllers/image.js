/** Los controladores son funciones que se pueden
 * solicitar indicándolas como  argumento en las 
 * funciones de enrutamiento.
 * En este archivo se recopila todo lo que se puede 
 * hacer con las imágenes
 */
const path = require('path');                             // Funciones para nombres de directorios
const fs = require('fs-extra');                           // Funciones extra file system
const md5 = require('md5');                               // Manejo de hash

const { randomNumber } = require('../helpers/libs');      // Helper para nombres aleatorios
const { Image, Comment } = require('../models/index');    // Modelos de la base de datos

const ctrl = {};

/** Generando vista de imagen 
 *  GET /images/:image_id 
 */
ctrl.index = async (req, res) => {
  // Búsqueda. La expresión regular es para que incluya la extensión en la dirección 
  let viewModel = { images: {}, comments: [] };

  const image = await Image.findOne({ filename: { $regex: req.params.image_id } });
  if (image) {
    image.views += 1;       // Actualiza contador de views
    viewModel.image = image;
    image.save()
    const comments = await Comment.find({ image_id: image._id })
      .sort({ timestamp: 1 });
    viewModel.comments = comments;
    res.render('image', viewModel);
  } else {
    res.redirect('/');
  }
};

/** Subiendo imagen al servidor 
 * POST /images
*/
ctrl.create = (req, res) => {
  // configurando nombre de archivo
  const saveImage = async () => {
    const imgURL = randomNumber();
    const images = await Image.find({ filename: imgURL });  // Comprobando que no está repetido                // Comprueba si el nombre está repetido
    if (images.length > 0) {
      saveImage();                                  // Si es igual, repite la función (recursión)
    } else {                                        // Si no, guarda archivo
      // Confirgurando directorios
      const imageTempPath = req.file.path;
      const ext = path.extname(req.file.originalname)
        .toLowerCase(); // Obtiene la extensión de la imagen
      const targetPath = path.resolve(`src/public/upload/${imgURL}${ext}`);

      // Validación de si el archivo es una imagen
      if (ext === '.png' || ext === '.gif' || ext === '.jpg' || ext === '.jpeg') {
        // Guardando imagen renombrada en destino /public/upload
        await fs.rename(imageTempPath, targetPath);
        // Guardando datos de imagen en base de datos
        const newImg = new Image({                  // Crea Modelo
          title: req.body.title,
          filename: imgURL + ext,
          description: req.body.description,
        });
        const imageSaved = await newImg.save();     // Guarda los datos en Mongo
      } else {
        await fs.unlink(imageTempPath);             // si no, elimina el archivo de public/temp
        res.status(500).json({ error: 'Solo se permiten archivos de imagen' }); // Manda error 500 y mensaje
      }
      res.redirect(`/images/${imgURL}`);
    }
  };

  saveImage();
};


/** Like
 * Solicitado desde botón 'like' recibe el Id de la imagen 
 * y suma uno
 * */
ctrl.like = async (req, res) => {
  const image = await Image.findOne({ filename: { $regex: req.params.image_id } });
  if (image) {
    image.likes += 1;
    await image.save();
    res.json({ likes: image.likes });
  } else {
    res.status(500).json({ error: 'Internal Error' });
  }
};

/** Añade comentario
 * POST /images/:image_id/comment
 * Usando los datos de la imagen y el formulario, crea el modelo del comentario
 */
ctrl.comment = async (req, res) => {
  const image = await Image.findOne({ filename: { $regex: req.params.image_id } });
  if (image) {
    const newComment = new Comment(req.body);
    newComment.gravatar = md5(newComment.email); // Gravatar requiere este hash para identificar al usuario
    newComment.image_id = image._id;
    console.log(newComment)
    await newComment.save();
    res.redirect(`/images/${image.uniqueId}#${newComment._id}`);
  } else {
    res.redirect('/');
  }

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;
