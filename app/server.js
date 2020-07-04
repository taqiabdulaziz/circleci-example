const express = require('express');
const enrouten = require('express-enrouten');
const cors = require('cors');
const cuid = require('cuid');
const config = require('../config');
const { httpStatus } = require('./libs/constants');

const app = express();
const port = config.get('PORT') || 3000;

// Embedd RequestId
app.use((req, _, next) => {
  req.requestId = cuid();
  next();
});

// cors
app.use(cors());

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logger
app.set('etag', false);

// Routing
app.use('/', enrouten({ directory: 'routes' }));

// Not Found handler
app.use('*', (_, res) => {
  res.status(httpStatus.notFound).json({
    message: 'Resource not found.',
  });
});

// Error handler
app.use((err, _, res) => {
  res.status(httpStatus.internalServerError).json(err);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}`);
});

module.exports = app;
