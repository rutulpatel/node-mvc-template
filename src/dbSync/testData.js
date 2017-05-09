
module.exports.generate = (db) => {
    console.log('Adding test data...'.green);

    Promise.all([
        db.Instructor.create({
            title: "Instructor 1",
            Classes: [
                {
                    title: "Beginners Salsa",
                    description: "Salsa for beginners"
                },
                {
                    title: "Beginners Bachata",
                    description: "Bachata for beginners"
                }
            ]
        }, {
            include: [db.Class]
        }),

        db.Instructor.create({
            title: "Instructor 2",
            Classes: [
                {
                    title: "Beginners Kizomba",
                    description: "Kizomba for beginners"
                },
                {
                    title: "Beginners Zouk",
                    description: "Zouk for beginners"
                }
            ]
        }, {
            include: [db.Class]
        }),

        db.Student.create({
            firstName: "Student",
            lastName: "1",
            dob: new Date("05/03/92"),
            email: 'student1@gmail.com',
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0
        }),

        db.Student.create({
            firstName: "Student",
            lastName: "2",
            dob: new Date("05/03/92"),
            email: 'student2@gmail.com',
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0
        }),

        db.Student.create({
            firstName: "Student",
            lastName: "3",
            dob: new Date("05/03/92"),
            email: 'student3@gmail.com',
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0
        })

    ]).then(values => {
        console.log('Test data has been generated'.green);
    });

};