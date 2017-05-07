
module.exports.generate = (db) => {
    console.log('Adding test data...'.green);
    Promise.all([
        db.Instructor.create({
            title: "Crystal Duran",
            shortDescription: "",
            bio: "",
            image: "",
            youtubePlaylistName: "",
            testItem: ""
        }),
        db.Student.create({
            firstName: "Jonathan",
            lastName: "Arellano",
            dob: new Date("05/03/92"),
            email: 'jarellano@gmail.com',
            phoneNumber: '8182976743',
            address: "231212",
            emergencyContact: "Mom",
            emergencyNumber: "827382827",
            subscribed: 0,
            liabilityUrl: null
        })
    ]).then(values => {
        console.log('Test data has been generated'.green);
    });

};