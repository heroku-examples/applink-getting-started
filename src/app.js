'use strict'

// Use module-alias to fix punycode deprecation warnings on node >= 22.
// See https://github.com/mathiasbynens/punycode.js/issues/137
const moduleAlias = require('module-alias');
moduleAlias.addAlias('punycode', 'punycode/');

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
const Swagger = require('@fastify/swagger');
const SwaggerUI = require('@fastify/swagger-ui');

// Pass --options via CLI arguments in command to enable these options.
const options = {
  // Configure log's requestId to use custom header
  requestIdHeader: 'x-request-id'
}

module.exports = async function (fastify, opts) {

    // Place here your custom code!
    fastify.register(Swagger, {
        mode: 'static',
        specification: {
            path: './api-spec.yaml'
        },
        exposeRoute: true
    });

    fastify.register(SwaggerUI, {
        routePrefix: '/api-docs',
    });

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })
}

module.exports.options = options
