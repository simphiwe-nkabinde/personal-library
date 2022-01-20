const express = require('express')
const router = express.Router();
const bookshelfController = require('../controllers/bookshelf.controllers')

// get shelf (completed | reading | wishlist)
router.get('/:shelf', bookshelfController.findShelf);

// get book by id
router.get('/book/:id', bookshelfController.findOne);

// add new book
router.post('/', bookshelfController.create);

// update book by id
router.put('/:id', bookshelfController.update);

// remove book by id
router.delete('/:id', bookshelfController.delete);

// remove all books
router.delete('/', bookshelfController.deleteAll);

module.exports = router;



/*

Methods |   Urls	                |   Actions
-------------------------------------------------------------
GET	    |   api/bookshelf	        |   get all books
GET	    |   api/bookshelf/:id	    |   get book by id
POST    |   api/bookshelf	        |   add new book
PUT	    |   api/bookshelf/:id	    |   update book by id
DELETE	|   api/bookshelf/:id	    |   remove book by id
DELETE	|   api/bookshelf	        |   remove all books
GET	    |   api/bookshelf?title=[kw]|   find all books which title contains 'kw'


*/