/** Esquema de los comentarios de imagen para la base de datos */
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema; // Indica que es un Id que corresponde a otra colecciòn

// Configurando esquema de Mongo
const CommentSchema = new Schema({
  image_id: { type: ObjectId },
  email: { type: String },
  name: { type: String },
  comment: { type: String },
  timestamp: { type: Date, default: Date.now },
});

/** Propiedad virtual que devuelve  */
CommentSchema.virtual('image')
  .set(function (image) {
    this._image = image;
  })
  .get(function () {
    return this._image;
  });


// Creando esquema
module.exports = model('Comment', CommentSchema);
