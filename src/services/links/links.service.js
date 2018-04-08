// Initializes the `links` service on path `/links`
const createService = require('feathers-knex');
const createModel = require('../../models/links.model');
const hooks = require('./links.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'links',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/links', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('links');

  service.hooks(hooks);
};
