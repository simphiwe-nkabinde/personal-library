const express = require('express')
const router = express.Router();
const bookshelfController = require('../controllers/bookshelf.controllers')

// get shelf (completed | reading | wishlist)
router.get('/:shelf', bookshelfController.findShelf);

// get book by id
router.get('/:id', bookshelfController.findOne);

// add new Tutorial
router.post('/', bookshelfController.create);

// update Tutorial by id
router.put('/:id', bookshelfController.update);

// remove Tutorial by id
router.delete('/:id', bookshelfController.delete);

// remove all Tutorials
router.delete('/', bookshelfController.deleteAll);

module.exports = router;



/*

Methods |   Urls	                |   Actions
-------------------------------------------------------------
GET	    |   api/bookshelf	        |   get all Tutorials
GET	    |   api/bookshelf/:id	    |   get Tutorial by id
POST    |   api/bookshelf	        |   add new Tutorial
PUT	    |   api/bookshelf/:id	    |   update Tutorial by id
DELETE	|   api/bookshelf/:id	    |   remove Tutorial by id
DELETE	|   api/bookshelf	        |   remove all Tutorials
GET	    |   api/bookshelf?title=[kw]|   find all Tutorials which title contains 'kw'


*/