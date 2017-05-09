import server from '../src';
import db from '../src/models';
global.server = server;
global.request = chai.request(server);
global.db = db;