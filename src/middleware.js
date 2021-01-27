const { isDev } = require('./utils');

module.exports = {
  notFound(req, res, next) {
    res.status(404);
    next(new Error(`Not Found ${req.originalUrl}`));
  },
  error(err, req, res, next) {
    if (res.statusCode == 200) res.status(500); // if it's still success, resolve as error
    res.json({
      message: err.message,
      stack: isDev ? err.stack : '🥞'
    });
  }
};
