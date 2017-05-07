import {Router} from 'express';

export default ({config, db, helpers}) => {
    let api = Router();

    //place all of your api get requests in this file.
    api.get('/', (req, res) => {
        res.json('Your app is running')
    });

    return api;
}
