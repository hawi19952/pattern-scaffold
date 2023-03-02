const defaultFunction = require('../functions/default.function');

module.exports = (req, res) => {
  const { headers } = req;
  defaultFunction(headers);
  res.status(201).send({message: 'hello'});
};