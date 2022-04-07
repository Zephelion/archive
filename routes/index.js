const express = require('express');
const router = express.Router();
const book = require('../controllers/book');


router.get('/', book.index);
router.get('/store', book.store);


module.exports = router;