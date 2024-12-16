const logger = require("../logger/logger");

const requestLogger = (req, res, next) => {
    logger.info({
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        headers: req.headers,
        query: req.query,
        body: req.body,
    });
    next();
};

module.exports = requestLogger;
