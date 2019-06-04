/* eslint-disable func-names */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

// Esquema para nuevo item de nota en base de datos
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, requires: true },
  password: { type: String, requires: true },
  date: { type: Date, default: Date.now },
});

// Encriptando password
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);    // Obtiene clave para encriptar
  const hash = bcrypt.hash(password, salt); // Codifica el password
  return hash;
};

/** Comprobando password
* ... Usa una función normal porque de esta forma puede
* ... acceder al .this (al modelo de datos)
* ... La comparación es codificando password de la misma forma y comparar */
UserSchema.methods.matchPassword = async function (password) {
  const passcheck = await bcrypt.compare(password, this.password);
  return passcheck;
};


module.exports = mongoose.model('User', UserSchema);
