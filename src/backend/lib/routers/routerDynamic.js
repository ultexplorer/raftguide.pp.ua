const {prepareFile, MIME_TYPES} = require("../static-modules/static-functions");
const path = require("path");
const { serveUser } = require('../dynimic-modules/serveUser')
const fs = require('fs');
const routerDynamic = async (client) => {

        return serveUser(client)
}

module.exports = { routerDynamic };