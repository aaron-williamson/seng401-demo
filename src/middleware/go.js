module.exports = function (options = {}) {
  return function go(req, res, next) {
    const errors = require('@feathersjs/errors');
    const app = req.app;
    const links = app.service('links');

    links.get(req.params.id)
      .then(link => {
        const url = link.link;
        res.redirect(url);
      })
      .catch(err => {
        next(new errors.NotFound(err));
      });
  };
};
