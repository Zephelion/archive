const Books = require('../models/Book');

const index = (req,res) => {
    Books.find().lean().then(books => {
        res.render('index', {
            books:books,
        });
    });
}

const store = (req,res) => {
    res.render('store');
}

const save = (req,res) => {
    const form = {
		title: req.body.title,
		author: req.body.author,
		catalogue_number: req.body.catalogue_number,
		year_publication: req.body.year_publication,
		place_publication: req.body.place_publication,
		language: req.body.language,
		subject: req.body.subject
	};

    const book = new Books(form);
    book.save();

    res.redirect('/')
}

const search = async (req,res) => {
    const searchString = 'histo';

    // Books.find({
    //     $or: [
    //         {title: searchString},
    //         {author: searchString},
    //         {place_publication: searchString},
    //         {language: searchString},
    //         {subject: searchString},
    //         // ...
    //     ]
    // }, (err,results) => {
    //     console.log(results);
    // });

    // const results = await Books.find({$text: { $search: searchString } });

    // console.log(results)


    Books.find({$or: [{subject: {$regex: searchString, $options: 'i'}}, 
            {author: {$regex: searchString, $options: 'i'}},
            {place_publication: {$regex: searchString, $options: 'i'}},
            {language: {$regex: searchString, $options: 'i'}},
            {catalogue_number: {$regex: searchString, $options: 'i'}},
            {title: {$regex: searchString, $options: 'i'}}]}, function(err,docs){
        console.log(docs);
    })

 
}

module.exports = {
    index:index,
    store:store,
    save:save,
    search:search,
}