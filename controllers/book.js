const res = require('express/lib/response');
const Book = require('../models/Book');

const index = (req,res) => {
    res.render('index');
}

const store = (req,res) => {
    res.render('store');
}

module.exports = {
    index:index,
    store:store
}