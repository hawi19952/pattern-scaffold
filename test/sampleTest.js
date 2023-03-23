
module.exports = (app) => {
  require('./init.env');
  require('./init.express')(app);
}