// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    // db.collection("Users").find().toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection("Todos").find({
    //     _id: new ObjectID("5a3c0d04985d55148febf491")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("unable to fetch todos", err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    // db.close();
});

