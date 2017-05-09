// process.env.NODE_ENV = 'local';
process.env.PORT = 8002;

import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiHttp);
chai.use(chaiAsPromised);
chai.should();

global.chai = chai;


