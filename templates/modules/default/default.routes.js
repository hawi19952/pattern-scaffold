const controllers = require('./controllers/index');

module.exports = (app) => {
  app.get('/default', makeCallback(controllers.get));
}