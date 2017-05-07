import {Router} from 'express';

export default ({config, db}) => {
    let api = Router();

    //place all of your api get requests in this file.
    api.get('/user', (req, res) => {
        db.query('SELECT * FROM Users', (err, user, fields) => {
            err ? res.json({message: err}) :
                res.json(user);
        });

    });
    api.post('/user', (req, res) => {
        let {FirstName, LastName, Email, Password} = req.body;
        let query = `INSERT INTO Users 
                 (FirstName, LastName, Email, Password) 
                 VALUES ('${FirstName}', '${LastName}', '${Email}', '${Password}')`;

        console.log(query);
        db.query(query,
            (err, results) => {
                if(err) return err;
                res.json(req.body);
            }
        );

    });

    return api;
}
