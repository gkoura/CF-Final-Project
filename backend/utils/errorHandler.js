const logger = require("../logger/logger");

const errorHandler = (err, req, res, next) => {
  logger.error("Unhandled error occurred.", { error: err.message });
  res.status(err.status || 500).json({ 
    error: err.message || "Internal Server Error" 
  });
};

module.exports = errorHandler;
