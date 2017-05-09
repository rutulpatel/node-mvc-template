import Student from '../../src/lib/student';

let studentObj = {
    firstName: "John",
    lastName: "Doe",
    dob: new Date('May 3, 1992'),
    email: "johndoe@gmail.com",
    phoneNumber: "838838872",
    address: '13223 somewhere ave',
    emergencyContact: "Aunt",
    emergencyNumber: "827738929"
};
let newId;

describe('[Unit] Student', () => {
    before((done) => {
        setTimeout(done, 1000)
    });

    it('should add a new instructor into the database.', (done) => {
        Student.add(studentObj).then(res => {
            res.dataValues.should.include.key('id');
            newId = res.dataValues.id;
            done();
        });
    });

    it('should not add a new user: User Title already Exists', () => {
        return Student.add(studentObj).should.be.rejected;
    });

    it('should find newly created instructor by id', (done) => {
       Student.getById(newId).then(res => {
           res.dataValues.should.include.key('id');
           res.dataValues.id.should.equal(newId);
           done();
       });
    });

    it('should delete the user that was just created', (done) => {
        Student.delete(newId).then(res => {
            res.should.equal(1);
            done();
        });
    });
});

