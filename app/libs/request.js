const axios = require('axios');

axios.interceptors.response.use(
  (response) => response.data,
  ({ response }) => Promise.reject(response.data),
);

module.exports = axios;
