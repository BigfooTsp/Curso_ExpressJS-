/** Sidebar Top Images
 * Obtiene las 9 imágenes con más likes
 * odenadas de mayor a menor
 */
const { Image } = require('../models');

module.exports = {

  async popular() {
    const images = await Image.find()
      .limit(9)
      .sort({ likes: -1 });
    return images;
  },

};
