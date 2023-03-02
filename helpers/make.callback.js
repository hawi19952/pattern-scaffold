module.exports = (providedFunction) => {
  return async function (req, res, next) {
    try {
      await providedFunction(req, res, next);
    } catch (error) {
      console.log(error);
      res.status(404).send({
        message: `error at moduleName: \n ${error}`
      })
    }
  }
}