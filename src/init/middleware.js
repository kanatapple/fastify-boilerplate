'use strict';

const path = require('path');

module.exports = (fastify) => {
  // adds a content type parser for the content type 'application/x-www-form-urlencoded'
  fastify.register(require('fastify-formbody'));
  
  // view engine
  fastify.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    },
    templates: 'templates'
  });
  
  // serve static
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../../assets'),
    prefix: '/assets'
  });
};
