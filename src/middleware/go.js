module.exports = function (options = {}) {
  return function go(req, res, next) {
    const errors = require('@feathersjs/errors');
    const logger = require('winston');
    const app = req.app;
    const links = app.service('links');
    logger.info((new Date).toISOString() + ' "' + req.method + ' ' + req.originalUrl + '"');

    links.get(req.params.id)
      .then(link => {
        const url = link.link;
        logger.info('Found link ' + url + ' successfully, redirecting');
        res.redirect(url);
      })
      .catch(err => {
        next(new errors.NotFound(err));
      });
  };
};
