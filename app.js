require('dotenv').config();

const server = require('./config/server');

const routes = require('./src/routes/routes');

server.use('/api', routes);

server.listen(process.env.PORT, function () { console.log('server run') });