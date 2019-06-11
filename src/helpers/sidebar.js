const Stats = require('./stats');

module.exports = async (viewModel) => {

  const results = await Promise.all([
    Stats(),
  ]);

  viewModel.sidebar = {
    stats: results[0],
  };

  return viewModel;

};
