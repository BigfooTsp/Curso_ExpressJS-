const express = require('express');
const router = express.Router();

// Añade nueva nota
router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

// Recibiendo datos de formulario 'New-Note'
router.post('/notes/new-note', (req, res) => {
    const {title, description} = req.body;
    const errors = [];
    if(!title) {
        errors.push({text: 'Escribe un título.'})
    };
    if(!description) {
        errors.push({text: 'Escribe una descripción.'})
    };
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
    res.send('ok');
    }
});

// Obtiene todas las notas
router.get('/notes', (req, res) => {
    res.send('Notas desde la base de datos');
});



module.exports = router;
