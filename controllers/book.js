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

module.exports = {
    index:index,
    store:store,
    save:save
}