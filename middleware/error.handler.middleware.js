const { CustomAPIError } = require("../errors/custom.errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    console.log(err.message);
    return res.status(err.statusCode).json({ error: err.message });
  }
  return res.status(500).json({ error: err.message });
};
module.exports = errorHandlerMiddleware;
