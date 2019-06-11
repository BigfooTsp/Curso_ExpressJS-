/* eslint-disable camelcase */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const _Item_Schema = new Schema({
  user: { type: String },
  comment: { type: String },
  fileName: { type: String },
  fileExt: { type: String },
  timestamp: { type: Date, default: Date.now },
});

// Atributo virtual con la dirección completa del archivo (si hay)
_Item_Schema.virtual('filePath')
  .get(function () {
    if (this.fileName) {
      return `/public/upload/${this.fileName}${this.fileExt}`;
    }
  });

module.exports = mongoose.model('_Item_', _Item_Schema);
