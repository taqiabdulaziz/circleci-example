const nconf = require('nconf');

nconf
  .argv()
  .env(['NODE_ENV', 'PORT'])
  .file({ file: './config.json' });

module.exports = nconf;
