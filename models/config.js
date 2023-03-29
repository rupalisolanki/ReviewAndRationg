const  mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/node_review');
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established sussecfully");
})