import Instructor from '../../src/lib/instructor';

let instructorObj = {
    title: "Ataca",
    shortDescription: "Batchata Dancer",
    bio: "Batchata Dancer"
};
let newId;

describe('[Unit] Instructor', () => {
    before((done) => {
        setTimeout(done, 1000)
    });

    it('should add a new instructor into the database.', (done) => {
        Instructor.add(instructorObj).then(res => {
            res.dataValues.should.include.key('id');
            newId = res.dataValues.id;
            done();
        });
    });

    it('should not add a new user: User Title already Exists', () => {
        return Instructor.add(instructorObj).should.be.rejected;
    });

    it('should find newly created instructor by id', (done) => {
       Instructor.getById(newId).then(res => {
           res.dataValues.should.include.key('id');
           res.dataValues.id.should.equal(newId);
           done();
       });
    });

    it('should delete the user that was just created', (done) => {
        Instructor.delete(newId).then(res => {
            res.should.equal(1);
            done();
        });
    });
});

