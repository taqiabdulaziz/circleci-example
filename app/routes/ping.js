const { successResponse } = require('../helpers/common');
const config = require('../../config')

module.exports = (router) => {
  router.get('/', (req, res) => successResponse(res, config.get('service-name')));
};
