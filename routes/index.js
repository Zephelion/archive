const express = require('express');
const router = express.Router();
const book = require('../controllers/book');


router.get('/', book.index);
router.get('/store', book.store);
router.post('/search', book.search);
router.post('/store', book.save);
router.post('/book', book.get);


module.exports = router;