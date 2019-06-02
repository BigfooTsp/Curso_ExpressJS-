module.exports = (app) => {
  
  // Página principal
  app.get('/', (req, res) => {
    res.send('Index page');
  });
};
