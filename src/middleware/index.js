const go = require('./go');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/:id', go());
};
