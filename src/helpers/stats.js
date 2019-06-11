/** Helper que cuenta los elementos en la base de datos */

const { _Item_ } = require('../models');

async function _item_Counter() {
  return await _Item_.countDocuments();
}

module.exports = async () => {

  const results = await Promise.all([
    _item_Counter(),
  ]);

  return {
    total_items_: results[0],
  };
};
