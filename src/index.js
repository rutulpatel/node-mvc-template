import colors from 'colors';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import controller from './controller';
import config from './config/config.json';
import db from "./models";
import dbSync from './dbSync';

if (process.env.NODE_ENV !== "production") {
    dbSync.run(db);
}

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// internal middleware
app.use(middleware({config, db}));

// api router
app.use('/', controller({config, db}));

//start server
app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`.blue);


export default app;
