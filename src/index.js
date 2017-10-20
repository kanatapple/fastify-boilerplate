'use strict';

const fastify = require('fastify')();

require('./init/middleware')(fastify);

require('./init/route')(fastify);

fastify.listen(3000, err => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
