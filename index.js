const http = require('http');
const serverStart = require('./server/server')
const port = process.env.PORT || 3000;
const server = http.createServer(serverStart);
server.listen(parseInt(port));

