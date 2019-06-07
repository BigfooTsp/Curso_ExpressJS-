/** Archivo de direccionamiento de rutas */

const express = require('express');
const router = express.Router();

const home = require('../controllers/home' );
const image = require('../controllers/image' );


module.exports = app => {
    router.get('/', home.index);                                // Página de inicio
    router.get('/images/:image_id', image.index);               // Página de imagen
    router.post('/images', image.create);                       // Subir imagen
    router.post('/images/image_id/like', image.like);           // Like
    router.post('/images/image_id/comment', image.comment);     // Comment
    router.delete('/images/image_id', image.remove);            // Borrar imagen

    app.use(router);
};