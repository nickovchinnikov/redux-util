'use strict';

module.exports = env => require(`./webpack.config.${env}`);