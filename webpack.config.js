'use strict';

const env = process.env.NODE_ENV;

module.exports = require(`./webpack.config.${env}`);