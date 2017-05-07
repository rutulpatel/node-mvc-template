import db from '../models';

exports.addInstructor = (instructorObj) => {
    new Promise((resolve, reject) => {
        db.Instructor.create(instructorObj)
            .then((res) => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
    });
};