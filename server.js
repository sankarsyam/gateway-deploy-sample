import express from 'express';
import config from 'dotenv/config';
import bodyParser from 'body-parser';
import swaggerTools from 'swagger-tools';
import swaggerSpec from './spec/spec.json';
import path from 'path';
import http from 'http';

const app = express();
app.use(bodyParser.json());
swaggerTools.initializeMiddleware(swaggerSpec, middleware => {
  app.use(middleware.swaggerMetadata());
  app.use(middleware.swaggerValidator());
  app.use(
    middleware.swaggerRouter({
      controllers: path.resolve(__dirname, 'controllers'),
      useStubs: true,
    })
  );
  app.use(middleware.swaggerUi());
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3002;
app.set('port', port);
app.use(bodyParser.json());
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function() {
  console.log(`API running on localhost:${port}`);
});

// Set our api routes
app.get('/', (request, response) => {
  response.status(200).json('Welcome to API spike');
});

module.exports = app;
