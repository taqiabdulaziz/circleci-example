const { successResponse } = require('../helpers/common');

module.exports = (router) => {
  router.get('/', (req, res) => successResponse(res, 'Pong!'));
};
