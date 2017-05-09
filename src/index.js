import 'colors';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';
import config from './config/config.json';
import db from "./models";
import dbSync from './dbSync';
import path from 'path';

if (process.env.NODE_ENV !== "production") {
    dbSync.run(db);
}

let app = express();
app.server = http.createServer(app);

// serve public folder
app.use(express.static('public'));

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
app.use('/api', api({config, db}));

// serve index.html which will be
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

// start server
app.server.listen(process.env.PORT || config.port);

console.log(`Started on port ${app.server.address().port}`.blue);

export default app;
