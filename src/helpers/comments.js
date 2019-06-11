/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

/** Obtiene los 5 últimos comentarios para la barra lateral
 * A cada comentario añade como propiedad el id de la imagen 
 */
const { Comment, Image } = require('../models');

module.exports = {
  async newest() {

    const comments = await Comment.find()
      .limit(5)
      .sort({ timestamp: -1 });

    for (const comment of comments) {
      const image = await Image.findOne({ _id: comment.image_id });
      comment.image = image;
    }

    return comments;
  },
};
