module.exports = function (options = {}) {
  return function go(req, res, next) {
    console.log('go middleware is running');
    next();
  };
};
