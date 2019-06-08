/** Esquema de la imagen para la base de datos */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const path = require('path');

// Configurando esquema de Mongo
const ImageSchema = new Schema({
  title: { type: String },
  description: { type: String },
  filename: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now },
});

/** Variable virtual 
 * Función que genera una variable image.uniqueId donde encontrar
 * el nombre del archivo sin extensión
 */
ImageSchema.virtual('uniqueId')
  .get(function () {
    return this.filename.replace(path.extname(this.filename), '');
  });


// Creando esquema
module.exports = mongoose.model('Image', ImageSchema);
