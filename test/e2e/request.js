const { createServer } = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../lib/app-koa');
const server = createServer(app);
const request = chai.request(server).keepOpen();

after(done => server.close(done));

module.exports = request;