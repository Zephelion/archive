const mongoose = require('mongoose');

const connectionString = `mongodb+srv://zephelion:${process.env.DB_PASSWORD}@archive.lmgqd.mongodb.net/archive?retryWrites=true&w=majority`;

const connectDB = () =>{
    try{
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log('DB - connected')
    }   catch(err){
        console.log('error occured while trying')
        throw err;
    }
};

module.exports = connectDB;