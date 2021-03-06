const  mongoose  = require("mongoose");

var bookSchema = new mongoose.Schema({

    title:{
        type:String,
        // required:true,
        text: true
    },
    author:{
        type:String,
        // required:true
    },
    catalogue_number:{
        type:String,
    },

    year_publication:{
        type:String
    },

    place_publication:{
        type:String,
        // required:true,
    },

    fingerprint:{
        type:String,
    },

    printer:{
        type:String,
    },

    exterior:{
        type:String,
    },

    interior:{
        type:String,
    },
    taal:{
        type:String,
        // required:true,
    },
    subject:{
        type:String,
        // required:true,
    }
})

// bookSchema.index({'$**': 'text'});
const Book = mongoose.model('Book', bookSchema);
// Book.createIndexes();

module.exports = Book