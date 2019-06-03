const mongoose = require('mongoose');
const { Schema } = mongoose;

// Esquema para nuevo item de nota en base de datos
const NoteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, requires: true},
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Note', NoteSchema)