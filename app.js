const PORT = process.env.PORT ?? 3000;

const GUN = require('gun');

const server = require('http').createServer().listen(PORT);
const gun = GUN({ web: server });