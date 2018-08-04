/**
 * Server
 */

// Node version check
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 8 || (major === 8 && minor <= 10)) {
  console.log('Please ensure your node version is >= 8.11.0');
  process.exit();
}

// Dependencies
const chalk = require('chalk');
const cl = console.log;
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandlers = require('./util/errorHandlers');

// Server Setup
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(errorHandlers.notFound);

// Error Handlers
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  cl(chalk.bgGreen(` Server running → PORT ${server.address().port} `));
});
