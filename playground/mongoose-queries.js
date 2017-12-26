const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

var id           = '5a40e5fd95a58937ec4ec810';

if (!ObjectId.isValid(id)) {
    console.log('Id is not valid');
}

User.findById(id).then((users) => {
    if (!users) {
        return console.log('Id not found');
    }
    console.log(JSON.stringify(users, undefined, 2));
}).catch((e) => console.log(e));

// if (!ObjectId.isValid(id)) {
//     console.log('Invalid Id');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos: ", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('By id: ', todo);
// }).catch((e) => console.log(e));
