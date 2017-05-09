import {Instructor} from '../models';

exports.getById = (id) => {
    return Instructor.findById(id);
};

exports.getAll = (searchParams, includeArr) => {
    return Instructor.findAll({where: searchParams, include: includeArr});
};

exports.search = (instructoObj) => {
    return Instructor.findAll({where: instructoObj});
};

exports.add = (instructorObj) => {
    return Instructor.create(instructorObj);
};

exports.delete = (id) => {
    return Instructor.destroy({where: {id: id}});
};




