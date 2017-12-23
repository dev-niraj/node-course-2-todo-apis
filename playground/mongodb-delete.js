const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Launch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Launch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteMany({name: 'Niraj Kumar'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').deleteOne({_id: new ObjectID('5a3d50e6ac9571d1fba2028a')}).then((result) => {
        console.log(result);
        
    })



    // db.close();
});