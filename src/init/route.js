'use strict';

module.exports = (fastify) => {
  fastify.get('/', (req, reply) => {
    reply.view('index.ejs', { title: 'fastify boilerplate' });
  });
};

