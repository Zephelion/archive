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
    const searchString = 'Harry Potter';

	// Books.find({title: age}, function(err,doc){
	// 	console.log(doc);
	// });

    // const results = await Books.find({$text: { $search: searchString } });

    // console.log(results)


    Books.find({$text: {$search: searchString}})
       .limit(10)
       .exec(function(err, docs) { console.log(docs) });
}

module.exports = {
    index:index,
    store:store,
    save:save,
    search:search,
}