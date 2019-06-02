const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('Ingresando en la app');
});

router.get('/users/signup', (req, res) => {
    res.send('Formulario de autentificación');
});



module.exports = router;
