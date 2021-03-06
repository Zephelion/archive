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

const save = async (req,res) => {


    const form = {
		title: req.body.title,
		author: req.body.author,
		catalogue_number: req.body.catalogue_number,
		year_publication: req.body.year_publication,
		place_publication: req.body.place_publication,
		taal: req.body.taal,
		subject: req.body.subject,
		exterior: req.body.exterior,
		interior: req.body.interior,
		fingerprint: req.body.fingerprint,
		printer: req.body.printer,
	};

    const book = await new Books(form);
    const savedBook = await book.save();
    if(savedBook){
        res.send(savedBook);
        console.log("euraka! boek is succesvol opgeslagen")
    }else{
        res.send("error");
        console.log("error")
    }
    // res.redirect('/store')
}

const search = (req,res) => {
    const searchString = req.body.value;

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
            {taal: {$regex: searchString, $options: 'i'}},
            {catalogue_number: {$regex: searchString, $options: 'i'}},
            {year_publication: {$regex: searchString, $options: 'i'}},
            {title: {$regex: searchString, $options: 'i'}}]}, 

            function(err,docs){
                res.send(docs);
            })

}

const getUser = (req,res) =>{
    const id = req.body.id;

    Books.findOne({_id:id}).then(book =>{
        res.send(book);
    })
}

module.exports = {
    index:index,
    store:store,
    save:save,
    search:search,
    get:getUser,
}