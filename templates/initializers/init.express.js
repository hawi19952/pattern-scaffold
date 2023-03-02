const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = process.env; 

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(cors)

  app.listen(PORT, () => {console.log(`App is running in ${PORT}`)})
};