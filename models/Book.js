const  mongoose  = require("mongoose");

var bookSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        text: true
    },
    author:{
        type:String,
        required:true
    },
    catalogue_number:{
        type:String,
    },

    year_publication:{
        type:String
    },

    place_publication:{
        type:String,
        required:true,
    },

    fingerprint:{
        type:String,
        required:true,
    },

    printer:{
        type:String,
        required:true,
    },

    exterior:{
        type:String,
        required:true,
    },

    interior:{
        type:String,
        required:true,
    },
    taal:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    }
})

// bookSchema.index({'$**': 'text'});
const Book = mongoose.model('Book', bookSchema);
// Book.createIndexes();

module.exports = Book