const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5a3ab77e6a359c64f871f399")
    }, {
        $set: {
            name: "Niraj Kumar Naik"
        },
        $inc: {
            age: 1       
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});

// const {MongoClient, ObjectId} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');        
//     }
//     console.log('Connected to MongoDB server');
    
//     db.collection('Users').findOneAndUpdate({
//         _id: new ObjectId("5a3ab77e6a359c64f871f399")
//     }, {
//         $set: {
//             name: "Niraj Kumar Naik"
//         }
//     }, {
//         $inc: {
//             age: 2
//         }
//     }, {
//         returnOriginal: false
//     }).then((result) => {
//         console.log(result);
//     });
// });