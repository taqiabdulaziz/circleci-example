const config = require('../../../config');

const {
  database,
  username,
  password,
  host,
  port,
  dialect,
} = config.get('db');

module.exports = {
  username,
  password,
  database,
  host,
  port,
  dialect,
};
