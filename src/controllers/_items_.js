/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

/** Controlador que comunica el servidor con la base de datos.
 * Se trata de configurar las operaciones necesarias con la base de datos y 
 * prepara las variables para ser utilizadas por el gestor de vistas de 
 * express
 */
const path = require('path'); // Funciones para nombres de directorios
const fs = require('fs-extra'); // Funciones extra file system

// Helpers
const sidebar = require('../helpers/sidebar'); // Helper constar los _items_ de la BD
const { randomNumber } = require('../helpers/libs'); // Helper para nombres aleatorios

const { _Item_ } = require('../models');  // Configurar aquí el nombre del modelo del controlador

const ctrl = {};


/** Configura view de un item */
ctrl.one_items_ = async (req, res) => {
  let viewModel = { _item_: {}, user: req.user };
  const _item_ = await _Item_.findById(req.params._id);
  if (_item_) {
    viewModel._item_ = _item_;
    // helpers
    viewModel = await sidebar(viewModel);
    // view
    res.render('_item_/one_item_', viewModel);
  } else {
    req.flash('error_msg', 'El elemento no existe');
    res.redirect('/_item_/all');
  }
};


/** Vista para todos los _items_ */
ctrl.all_items_ = async (req, res) => {
  let viewModel = { _items_: {}, user: req.user };
  viewModel._items_ = await _Item_.find({ user: req.user.id })
    .sort({ date: 'desc' });
  // helpers
  viewModel = await sidebar(viewModel);
  res.render('_item_/all_items_', viewModel);
};


/** Inserta elemento en la base de datos */
ctrl.new_item_ = async (req, res) => {
  let viewModel = { user: req.user };
  // helpers
  viewModel = await sidebar(viewModel);
  res.render('_item_/new_item_', viewModel);
};


/** Inserta elemento en la base de datos */
ctrl.create = async (req, res) => {
  let new_item_ = new _Item_({
    comment: req.body.comment,
    user: req.user.id,
  });

  // file Location
  const saveItemFile = async () => {
    const _item_RandName = randomNumber();
    const _items_ = await _Item_.findOne({
      fileName: _item_RandName,
    });
    
    if (_items_) {
      saveItemFile();                             // Creando nombre aleatorio no repetido
    } else {
      const fileTempPath = req.file.path;
      const ext = path.extname(req.file.originalname);
      const targetPath = path.resolve(`src/public/upload/${_item_RandName}${ext}`);
      await fs.rename(fileTempPath, targetPath); // Mueve el archivo al directorio

      new_item_.fileName = _item_RandName;
      new_item_.fileExt = ext;
    }
  };

  if (req.file) {
    await saveItemFile();
  }

  await new_item_.save();

  req.flash('succes_msg', 'Nuevo _item_ guardado');
  res.redirect('/_item_/all');
};

/** Edita elemento en la base de datos */
ctrl.update = async (req, res) => {
  const edit_item_ = await _Item_.findByIdAndUpdate(req.params._id, req.body);
  req.flash('success_msg', 'Elemento editado');
  res.redirect('/_item_/all');
};


/** Elimina elemento en la base de datos */
ctrl.delete = async (req, res) => {
  const del_item_ = await _Item_.findById(req.params._id);
  if (del_item_) {
    if (del_item_.filePath) {
      await fs.unlink(path.resolve(`./src/${del_item_.filePath}`)); // Borrando archivo
    }

    await _Item_.findByIdAndDelete(del_item_._id);                  // Borrando entrada
    req.flash('success_msg', 'Elemento eliminado');
    res.redirect('/_item_/all');
  } else {
    req.flash('error_msg', 'No se pudo eliminar el elemento');
    res.redirect('/_item_/all');
  }
};


module.exports = ctrl;
