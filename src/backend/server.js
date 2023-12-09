'use strict';

const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const Client  = require('./lib/cookies/client')

const PORT = 8000;

const { MIME_TYPES, prepareFile, STATIC_PATH } = require('./lib/static-modules/static-functions')
const {router} = require("./lib/routers/router");


http.createServer(async (req, res) => {
  const client = await Client.getInstance(req, res)
  res.on('finish', () => {
    if (client.session) client.session.save();
  })
  await router(client)
}).listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
